
// We don't want to send 'react-dom/server' to the client
import React, { FC, ReactElement } from 'react'

let ReactDOMServer
if (typeof window === 'undefined') {
  ReactDOMServer = require('react-dom/server')
}

const NoScript: FC<{ children: ReactElement }> = ({ children }) => {
  if (!ReactDOMServer) {
    return null
  }
  const staticMarkup = ReactDOMServer.renderToStaticMarkup(children)
  return <noscript dangerouslySetInnerHTML={{ __html: staticMarkup }} />
}
export default NoScript
