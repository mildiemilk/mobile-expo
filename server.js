const express = require('express')
const next = require('next')
const cors = require('express-cors')
const bodyParser = require('body-parser')
const axios = require('axios')

const dev = process.env.NODE_ENV !== 'production'
const app = next({
	dev
})
const handle = app.getRequestHandler()
const SECRET_KEY = 'skey_test_56u0cmouwglb4b9etxp'
const EXPIRY_DATE = '2015-09-10'
var omise = require('omise')({
  'secretKey': SECRET_KEY,
  'omiseVersion': EXPIRY_DATE
});

app.prepare()
	.then(() => {
		const server = express()

		server.use(bodyParser.json())
		server.use(bodyParser.urlencoded({
			extended: true
		}))

		server.post('/api/charges', (req, res) => {
			return omise.customers.create({
				email: 'john.doe@example.com',
				description: 'John Doe (id:30)',
				card: req.body.card
			}).then( function(customer){
				console.log(customer)
				return omise.charges.create({
					description: req.body.description,
					amount: req.body.amount,
					currency: req.body.currency,
					capture: req.body.capture,
					customer: customer.id 
				})
			}).then(function (charge) {
				console.log('charge:', charge)
				res.status(200).send(JSON.stringify(charge))
			}).error(function (err) {
				console.log('error:', err)
			}).done()

		})

		server.get('/p/edit/:product_id/:user_id', (req, res) => {
			const actualPage = '/productRegister'
			const queryParams = {
				productID: req.params.product_id,
				userID: req.params.user_id
			}
			app.render(req, res, actualPage, queryParams)
		})

		server.get('/p/:product_id/:user_id', (req, res) => {
			const actualPage = '/product'
			const queryParams = {
				productID: req.params.product_id,
				userID: req.params.user_id
			}
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
