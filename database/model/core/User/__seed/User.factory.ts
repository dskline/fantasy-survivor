import { define } from 'typeorm-seeding'

import { User } from 'src/model/core/User/User.entity'

define(User, (faker) => {
  const user = new User()
  user.name = faker.name.firstName()
  user.email = faker.internet.email(user.name, undefined, 'dispostable.com')
  return user
})
