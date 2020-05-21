import glob from 'glob'
import { Connection } from 'typeorm'
import { Factory, Seeder } from 'typeorm-seeding'

import {
  buildContestant,
  BuildContestantWithFirstLastName,
  BuildContestantWithName
} from 'src/model/core/Contestant/Contestant.builder'
import { Contestant } from 'src/model/core/Contestant/Contestant.entity'
import buildSeason, { BuildSeasonProps } from 'src/model/core/Season/__seed/Season.builder'
import { Season } from 'src/model/core/Season/Season.entity'

export interface SeasonSeedFileData {
  season: BuildSeasonProps,
  contestants: Array<BuildContestantWithName | BuildContestantWithFirstLastName>
  // TODO: events will go here as well
}
export interface SeasonSeedFile {
  data: SeasonSeedFileData
}

export default class CreateSeasons implements Seeder {

  public async run (factory: Factory, connection: Connection): Promise<void> {

    const dataFiles = glob.sync('**/Season/__seed/**/*.data.ts')

    for (const file of dataFiles) {
      const { data } = await import(file) as SeasonSeedFile
      const season = buildSeason(data.season)

      await connection
        .createQueryBuilder()
        .insert()
        .into(Season)
        .values([season])
        .execute()

      await connection
        .createQueryBuilder()
        .insert()
        .into(Contestant)
        .values(data.contestants.map(c => {
          const newContestant = buildContestant(c)
          newContestant.season = season
          return newContestant
        }))
        .execute()
    }
  }
}
