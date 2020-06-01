import React, { FC } from 'react'
import Head from 'next/head'

import Box from 'src/components/_layout/Box'
import BackgroundUpdater from 'src/features/pwa/BackgroundUpdater'
import ThemeProvider from 'src/features/theme/ThemeProvider'

const BasePage: FC = ({ children }) => (
  <ThemeProvider>
    <Head>
      <title>Fantasy Survivor</title>
    </Head>
    <BackgroundUpdater />
    <Box minHeight='100vh'>
      {children}
    </Box>
  </ThemeProvider>
)

export default BasePage
