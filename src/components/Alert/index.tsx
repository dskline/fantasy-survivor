import React from 'react'
import {
  Alert as ChakraAlert,
  AlertDescription as ChakraAlertDescription,
  AlertIcon as ChakraAlertIcon
} from '@chakra-ui/core'

export const AlertDescription: typeof ChakraAlertDescription = (props) => (
  <ChakraAlertDescription {...props} />
)
export const AlertIcon: typeof ChakraAlertIcon = (props) => (
  <ChakraAlertIcon {...props} />
)

const Alert: typeof ChakraAlert = (props) => (
  <ChakraAlert {...props} />
)

export default Alert
