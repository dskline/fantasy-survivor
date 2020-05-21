import React from 'react'
import { graphql } from '@gqless/react'

import LazyContainer from 'src/components/LazyContainer'
import BasePage from 'src/templates/core/BasePage'
import { query } from 'src/utilities/graphql'

const Seasons = graphql(() => (
  <div>
    {query.season.map(s => (
      <div key={s.id}>{`${s.countryCode}-${s.number} (${s.name})`}</div>
    ))}
  </div>
))

const SeasonDetails = graphql(() => (
  <BasePage>
    <LazyContainer>
      <Seasons />
    </LazyContainer>
  </BasePage>
))

export default SeasonDetails
