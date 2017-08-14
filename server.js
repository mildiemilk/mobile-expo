const express = require('express')
const next = require('next')
const cors = require('express-cors')
const omise = require('omise')({
  'secretKey': 'skey_test_56u0cmouwglb4b9etxp',
  'omiseVersion': '2015-09-10'
})

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.use(cors({
    allowedOrigins: [
      'https://www.omise.co/',
      'http://localhost:3000/payment',
      'https://api.omise.co/charges'
    ]
  }))

  server.get('/pay', (req,res) => {
    console.log('server side')
    omise.charges.create({
      'description': req.params.description,
      'amount': req.params.amount,
      'currency': req.params.currency,
      'capture': req.params.capture
    }), function(err, resp) {
      if(resp.paid) {
        console.log('success', resp)
      } else {
        console.log('eror', resp.failure_code)
      }
    }
    app.render(req, res, '/pay', req.params)
  })

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
