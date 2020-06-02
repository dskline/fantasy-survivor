import React, { FC, useEffect } from 'react'
import { BsQuestionCircle } from 'react-icons/bs'
import { AppProps } from 'next/app'

import Box from 'src/components/_layout/Box'
import Link from 'src/components/Link'
import NoScript from 'src/components/NoScript'
import * as analytics from 'src/utilities/analytics'

export function reportWebVitals (metrics): void {
  analytics.logWebVitals(metrics)
}

const App: FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    analytics.init()
  })

  return (
    <>
      <Component {...pageProps} />
      <NoScript>
        <Box
          position='fixed'
          bottom={0}
          padding={1}
          width='100vw'
          textAlign='center'
        >
          <Link
            href='https://www.enable-javascript.com/'
            isExternal
            display='flex'
            alignItems='center'
            justifyContent='center'
          >
            <Box as={BsQuestionCircle} display='inline' marginRight={2} />
            Enable JavaScript for the best experience
          </Link>
        </Box>
      </NoScript>
    </>
  )
}

export default App
