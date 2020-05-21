import React from 'react'
import { graphql } from '@gqless/react'

import LazyContainer from 'src/components/LazyContainer'
import BasePage from 'src/templates/core/BasePage'
import { query } from 'src/utilities/graphql'

const Seasons = graphql(() => (
  <div>
    {query.league.map(s => (
      <div key={s.id}>{`${s.id} (${s.seasonId})`}</div>
    ))}
  </div>
))

const SeasonDetails = graphql(() => (
  <BasePage>
    <div>
      <LazyContainer>
        <Seasons />
      </LazyContainer>
    </div>
  </BasePage>
))

export default SeasonDetails
