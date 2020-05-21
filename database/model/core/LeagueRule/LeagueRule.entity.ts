import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import { League } from 'src/model/core/League/League.entity'

type RuleOptions = {
  pointDelta: number
}

@Entity()
export class LeagueRule<T extends string> {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => League, league => league.rules)
  league: League

  @Column()
  ruleId: T

  @Column('jsonb')
  options: T
}
