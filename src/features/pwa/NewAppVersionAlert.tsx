import React, { FC, useEffect, useState } from 'react'

import Box from 'src/components/_layout/Box'
import Alert, { AlertDescription, AlertIcon } from 'src/components/Alert'
import Button, { ButtonGroup } from 'src/components/Button'

export const UPDATE_APP_BUTTON_ID = 'pwa-update-app-button'

type NewAppVersionAlert = FC<{ onClose: () => void, id: string }>;
const NewAppVersionAlert: NewAppVersionAlert = ({ onClose, id }) => {
  const [isReloadingPage, setIsReloadingPage] = useState(false)

  useEffect(() => {
    document.getElementById(UPDATE_APP_BUTTON_ID).focus()
  })

  return (
    <Alert
      id={id}
      variant='top-accent'
      status='info'
      width={['100vw', '75vw']}
      maxWidth='400px'
    >
      <AlertIcon />
      <AlertDescription margin='auto'>
        <Box>There is a new version of the app!</Box>
        <ButtonGroup
          display='flex'
          justifyContent='flex-end'
          marginTop={2}
          spacing={4}
        >
          <Button size='sm' variant='ghost' onClick={(): void => { onClose() }}>
            Dismiss
          </Button>
          <Button
            id={UPDATE_APP_BUTTON_ID}
            size='sm'
            variantColor='blue'
            onClick={(): void => {
              window.workbox.addEventListener('controlling', () => {
                setIsReloadingPage(true)
                window.location.reload()
              })
              window.workbox.messageSW({ type: 'SKIP_WAITING' })
            }}
            loadingText='Updating...'
            isLoading={isReloadingPage}
          >
            Update
          </Button>
        </ButtonGroup>
      </AlertDescription>
    </Alert>
  )
}
export default NewAppVersionAlert
