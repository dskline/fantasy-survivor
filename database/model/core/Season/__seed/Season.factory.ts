import { define } from 'typeorm-seeding'

import { Season } from 'src/model/core/Season/Season.entity'

define(Season, (faker, context: Partial<Season>) => {
  const season = new Season()
  season.countryCode = context.countryCode
  season.name = context.name
  season.number = context.number
  return season
})
