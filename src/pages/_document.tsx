import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

export default class RootDocument extends Document {
  static async getInitialProps(context: any) {
    const initialProps = await Document.getInitialProps(context)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="data:;base64,iVBORw0KGgo=" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
