import { CountryCode } from 'src/model/core/Season/CountryCode.enum'
import { Season } from 'src/model/core/Season/Season.entity'

export type BuildSeasonProps = {
  countryCode: CountryCode,
  number: number,
  name: string
}

export default function buildSeason (props: BuildSeasonProps): Season {
  const season = new Season()
  season.countryCode = props.countryCode
  season.number = props.number
  season.name = props.name
  season.generateId() // dependency for generating contestant IDs

  return season
}
