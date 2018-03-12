import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import flush from 'styled-jsx/server'
import styled from 'styled-components'
import  Header  from '../view/environment/Header';
import DefaultHead from '../view/environment/DefaultHead'

const BodyWithMobile = styled.body`

  @media (max-width: 700px) {
    width: max-content;
  } 
`
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
          `}</style>
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
