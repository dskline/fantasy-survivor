import React from 'react'
import { Link as ChakraLink } from '@chakra-ui/core'

const Link: typeof ChakraLink = (props) => (
  <ChakraLink {...props}>
    {props.children}
  </ChakraLink>
)

export default Link
