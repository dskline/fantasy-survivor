import React, { FC } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'

import Box from 'src/components/_layout/Box'
import ThemeProvider from 'src/features/theme/ThemeProvider'

const BackgroundUpdater = dynamic(() => import('src/features/pwa/BackgroundUpdater'), { ssr: false })

// This sets the empty page margins
export const MAX_APPLICATION_WIDTH_PX = 1386

const BasePage: FC = ({ children }) => (
  <ThemeProvider>
    <Head>
      <title>Fantasy Survivor</title>
    </Head>
    {typeof window !== 'undefined' && window.workbox && (
      <BackgroundUpdater />
    )}
    <Box minHeight='100vh' maxWidth={MAX_APPLICATION_WIDTH_PX} margin='auto'>
      {children}
    </Box>
  </ThemeProvider>
)

export default BasePage
