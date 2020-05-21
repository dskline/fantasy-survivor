import React, { FC } from 'react'
import { CssBaseline } from '@material-ui/core'

import MaterialUIThemeProvider from 'src/templates/core/material-ui/MaterialUIThemeProvider'

type Props = {}

const BaseMaterialUIPage: FC<Props> = ({ children }) => (
  <MaterialUIThemeProvider>
    <CssBaseline />
    <div>
      {children}
    </div>
  </MaterialUIThemeProvider>
)

export default BaseMaterialUIPage
