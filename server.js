const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('/p/edit/:product_id/:user_id', (req, res) => {
    const actualPage = '/productRegister'
    const queryParams = { productID: req.params.product_id, userID: req.params.user_id } 
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/p/:product_id/:user_id', (req, res) => {
    const actualPage = '/product'
    const queryParams = { productID: req.params.product_id, userID: req.params.user_id } 
    app.render(req, res, actualPage, queryParams)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})