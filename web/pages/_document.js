import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render() {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
      <html>
        <Head>
          {styleTags}
          <style jsx global>{`
            body { 
              background: #E9EBEE;
            }
            body > div:first-child {
              height: 100vh;
            }
            * {
              font-family: 'Athiti', sans-serif;
            }
            @media (max-width: 700px) {
              width: max-content;
            } 
            `}
        </style>
        </Head>
        {/* {this.props.customValue} */}
        <body>
         {main} 
        </body>
        <NextScript />
      </html>
    )
  }
}
