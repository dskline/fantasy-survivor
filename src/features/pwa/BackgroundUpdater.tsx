import React, { FC, useEffect } from 'react'

import useToast from 'src/components/Toast'
import NewAppVersionAlert from 'src/features/pwa/NewAppVersionAlert'

const BackgroundUpdater: FC = () => {
  const { toast } = useToast()

  const renderAlert: typeof NewAppVersionAlert = (props) => (
    <NewAppVersionAlert {...props} />
  )

  useEffect(() => {
    if (window.workbox) {
      window.workbox.addEventListener('waiting', () => {
        toast({
          duration: null,
          status: 'info',
          position: 'bottom',
          render: renderAlert,
        })
      })
      window.workbox.register()
    }
  })

  return <></>
}

export default BackgroundUpdater
