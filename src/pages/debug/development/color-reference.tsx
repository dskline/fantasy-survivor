/**
 * http://localhost:3000/debug/development/color-reference
 */
import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'

import colors from 'src/config/css/colors.module.scss'
import BaseDebugPage from 'src/templates/development/BaseDebugPage'

const ColorPalettePage: NextPage = () => {
  const [paletteJson, setPaletteJson] = useState(undefined)

  useEffect(() => {
    const elements = document.querySelectorAll('div[aria-label]')
    const colors = [...new Array(elements.length)].map((i, n) => {
      const element = elements.item(n)
      const key = element.getAttribute('aria-label')
      const group = key.split('-')[0]
      return {
        group,
        key: key === group ? 'main' : `${key.split('-').pop()}00`,
        color: window.getComputedStyle(element).backgroundColor,
      }
    })
    setPaletteJson(
      JSON.stringify({
        palette: {
          ...colors.reduce((previousValue, currentValue) => {
            if (currentValue.key === 'main') {
              return previousValue
            }
            if (!previousValue[currentValue.group]) {
              previousValue[currentValue.group] = { 50: '#fff' }
            }
            previousValue[currentValue.group][currentValue.key] =
              currentValue.color
            return previousValue
          }, {}),
        },
      })
    )
  }, [])

  return (
    <BaseDebugPage>
      {Object.keys(colors)
        .filter((key) => key.startsWith('bg'))
        .sort()
        .map((className) => {
          const key = className.replace('bg-', '')
          return (
            <div
              key={className}
              style={{ padding: 5, height: 50 }}
              aria-label={key}
              className={colors[className]}
            >
              {`.${key}`}
            </div>
          )
        })}
      <textarea style={{ width: '100vw', height: 100 }} value={paletteJson} />
    </BaseDebugPage>
  )
}

export default ColorPalettePage
