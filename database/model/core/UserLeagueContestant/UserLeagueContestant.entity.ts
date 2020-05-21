import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import { Contestant } from 'src/model/core/Contestant/Contestant.entity'
import { League } from 'src/model/core/League/League.entity'
import { User } from 'src/model/core/User/User.entity'

@Entity({
  orderBy: {
    rank: 'ASC'
  }
})
export class UserLeagueContestant {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => User)
  user: User

  @ManyToOne(() => League)
  league: League

  @ManyToOne(() => Contestant)
  contestant: Contestant

  @Column('int', {
    comment: 'Rank is important for some leagues - for others this column is useful for display order'
  })
  rank: number
}
