import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm'

import { League } from 'src/model/core/League/League.entity'

@Entity()
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  email: string

  @Column()
  name: string

  @OneToMany(() => League, league => league.users)
  leagues: League[]
}
