import React from 'react'
import { ServerStyleSheets } from '@material-ui/styles'
import Manifest from 'next-manifest/manifest'
import { DocumentInitialProps, RenderPageResult } from 'next/dist/next-server/lib/utils'
import NextDocument, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'
import packageJson from 'package.json'

import HeadLink from 'src/utilities/nextjs/HeadLink'

class Document extends NextDocument {
  render (): JSX.Element {
    // noinspection HtmlRequiredTitleElement (not recommended in _document.tsx)
    return (
      <Html lang='en'>
        <Head>
          <Manifest
            href='/manifest.json'
          />
          <meta name='Description' content={packageJson.description} />
          <HeadLink rel='apple-touch-icon' href='/public/favicon/apple-icon.png' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
Document.getInitialProps = async (ctx: DocumentContext): Promise<DocumentInitialProps> => {
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = (): RenderPageResult | Promise<RenderPageResult> =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />)
    })

  const initialProps = await NextDocument.getInitialProps(ctx)

  return {
    ...initialProps,
    styles: [
      <React.Fragment key='styles'>
        {initialProps.styles}
        {sheets.getStyleElement()}
      </React.Fragment>
    ]
  }
}

export default Document
