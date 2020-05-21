import React, { FunctionComponent } from 'react'
import Head from 'next/head'

import BaseMaterialUIPage from 'src/templates/core/material-ui/BaseMaterialUIPage'

type Props = {}

const BasePage: FunctionComponent<Props> = ({ children }) => (
  <BaseMaterialUIPage>
    <Head>
      <title>Fantasy Survivor</title>
    </Head>
    {children}
  </BaseMaterialUIPage>
)

export default BasePage
