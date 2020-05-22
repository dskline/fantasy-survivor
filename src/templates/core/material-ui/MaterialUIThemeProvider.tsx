import React, { FunctionComponent } from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import { colors } from 'src/config/css/colors.json'

type Props = {}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary
    },
    secondary: {
      main: colors.light,
    },
  },
})

const MaterialUIThemeProvider: FunctionComponent<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)
export default MaterialUIThemeProvider
