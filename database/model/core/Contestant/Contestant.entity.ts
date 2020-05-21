import { BeforeInsert, Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm'

import { Season } from 'src/model/core/Season/Season.entity'

@Entity()
export class Contestant {

  @PrimaryColumn()
  id: string

  @Column()
  firstName: string

  @Column()
  lastName: string

  @ManyToOne(() => Season, season => season.contestants)
  season: Season

  @BeforeInsert()
  generateId (): void {
    this.id = `${this.season.id}_${(this.firstName + this.lastName).replace(/[^\w\s]/, '').toUpperCase()}`
  }
}
