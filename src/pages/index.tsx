import React from 'react'
import { Link } from '@material-ui/core'
import { NextPage } from 'next'

import BasePage from 'src/templates/core/BasePage'

const HomePage: NextPage = () => (
  <BasePage>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f8f3d4' }}>
      <Link href='/1' style={{ fontSize: '7vw' }}>Go to First Question</Link>
    </div>
  </BasePage>
)
export default HomePage
