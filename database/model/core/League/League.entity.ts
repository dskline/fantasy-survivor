import {
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'

import { LeagueRule } from 'src/model/core/LeagueRule/LeagueRule.entity'
import { Season } from 'src/model/core/Season/Season.entity'
import { User } from 'src/model/core/User/User.entity'

@Entity()
export class League {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @CreateDateColumn()
  createdDate: Date

  @UpdateDateColumn()
  updatedDate: Date

  @ManyToOne(() => Season)
  season: Season

  @ManyToMany(() => User, user => user.leagues)
  users: User[]

  @OneToMany(() => LeagueRule, rules => rules.league)
  rules: LeagueRule<string>[]
}
