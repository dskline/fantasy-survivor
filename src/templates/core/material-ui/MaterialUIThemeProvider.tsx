import React, { FunctionComponent } from 'react'
import { blue } from '@material-ui/core/colors'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

type Props = {}

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: {
      main: '#f44336',
    },
  },
})

const MaterialUIThemeProvider: FunctionComponent<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)
export default MaterialUIThemeProvider
