import React, { useEffect } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

import config from 'src/config'
import HomePage from 'src/pages'
import BasePage from 'src/templates/core/BasePage'

const { isDebugMode } = config.public

const BaseDebugPage: NextPage = ({ children }) => {
  const router = useRouter()

  useEffect(() => {
    if (!isDebugMode) {
      router.push('/')
    }
  })

  return isDebugMode ? (
    <BasePage>
      {children}
    </BasePage>
  ) : (
    <HomePage />
  )
}

export default BaseDebugPage
