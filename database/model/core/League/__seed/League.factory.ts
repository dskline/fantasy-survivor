import { define, factory } from 'typeorm-seeding'

import { League } from 'src/model/core/League/League.entity'
import { Season } from 'src/model/core/Season/Season.entity'
import { User } from 'src/model/core/User/User.entity'

define(League, () => {
  const league = new League()
  league.users = factory(User)() as any
  league.season = factory(Season)() as any
  return league
})
