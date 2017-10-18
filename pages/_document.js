import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()

    return (
      <html>
        <Head>
          {styleTags}
          <link rel="stylesheet" href="static/fonts/font-awesome.min.css"/>
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"/>
        </Head>

        <body>
          <div className="root">
            {main}
          </div>

          <NextScript />
        </body>
      </html>
    )
  }
}
