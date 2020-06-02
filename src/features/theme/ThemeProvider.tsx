import React, { FC } from 'react'
import { CSSReset, theme, ThemeProvider as ChakraThemeProvider } from '@chakra-ui/core'

import { palette } from 'src/config/css/colors.json'

const customTheme: typeof theme = {
  ...theme,
  colors: {
    ...theme.colors,
    ...palette,
  },
}

const ThemeProvider: FC = ({ children }) => (
  <ChakraThemeProvider theme={customTheme}>
    <CSSReset />
    {children}
  </ChakraThemeProvider>
)
export default ThemeProvider
