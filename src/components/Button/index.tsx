import React from 'react'
import { Button as ChakraButton, ButtonGroup as ChakraButtonGroup } from '@chakra-ui/core'

export const ButtonGroup: typeof ChakraButtonGroup = (props) => (
  <ChakraButtonGroup {...props} />
)

const Button: typeof ChakraButton = (props) => (
  <ChakraButton {...props}>
    {props.children}
  </ChakraButton>
)

export default Button
