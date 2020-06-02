import React, { FC, useEffect } from 'react'
import dynamic from 'next/dynamic'

import useToast from 'src/components/Toast'

const NewAppVersionAlert = dynamic(() => import('src/features/pwa/NewAppVersionAlert'), { ssr: false })

const BackgroundUpdater: FC = () => {
  const { toast } = useToast()

  const renderAlert: typeof NewAppVersionAlert = (props) => (
    <NewAppVersionAlert {...props} />
  )

  useEffect(() => {
    window.workbox.addEventListener('waiting', () => {
      toast({
        duration: null,
        status: 'info',
        position: 'bottom',
        render: renderAlert,
      })
    })
    window.workbox.register()
  })

  return <></>
}

export default BackgroundUpdater
