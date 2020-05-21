/**
 * http://localhost:3000/debug/development/color-reference
 */
import React from 'react'
import { NextPage } from 'next'

import colors from 'src/config/css/colors.module.scss'
import BaseDebugPage from 'src/templates/development/BaseDebugPage'

const ColorPalettePage: NextPage = () => (
  <BaseDebugPage>
    {Object.keys(colors).filter(key => key.startsWith('bg')).sort().map(key => (
      <div key={key} style={{ padding: 5, height: 50 }} className={colors[key]}>
        {`.${key.replace('bg-', '')}`}
      </div>
    ))}
  </BaseDebugPage>
)

export default ColorPalettePage
