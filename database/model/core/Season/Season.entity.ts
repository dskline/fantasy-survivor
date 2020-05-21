import { BeforeInsert, Column, Entity, OneToMany, PrimaryColumn } from 'typeorm'

import { Contestant } from 'src/model/core/Contestant/Contestant.entity'
import { CountryCode } from 'src/model/core/Season/CountryCode.enum'

@Entity()
export class Season {
  @PrimaryColumn()
  id: string

  @Column('enum', { enum: CountryCode })
  countryCode: CountryCode

  @Column('int')
  number: number

  @Column()
  name: string

  @OneToMany(() => Contestant, contestant => contestant.season, {
    cascade: ['insert']
  })
  contestants: Contestant[]

  @BeforeInsert()
  generateId (): void {
    this.id = `${this.countryCode}_${`${this.number}`.padStart(3, '0')}`
  }
}
