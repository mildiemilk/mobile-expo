const express = require('express')
const next = require('next')
const cors = require('express-cors')
const bodyParser = require('body-parser')
const axios = require('axios')
import loadFirebase from './lib/database'
require('dotenv').config()

const dev = process.env.NODE_ENV !== 'production'
const app = next({
	dev
})
const handle = app.getRequestHandler()
const SECRET_KEY = process.env.OMISE_SECRET_KEY
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
				return omise.charges.create({
					description: req.body.description,
					amount: req.body.amount * 100,
					currency: req.body.currency,
					capture: req.body.capture,
					customer: customer.id 
				})
			}).then(function (charge) {
				res.status(200).send(JSON.stringify(charge))
			}).error(function (err) {
				console.log('error:', err)
			}).done()

		})
		server.post('/api/result-payment', async (req, res) => {
			const { refno } = req.body
			let db = await loadFirebase('database')
			const result = await db
				.ref("transactions")
				.orderByChild("refno")
				.equalTo(parseInt(refno))
				.once('value')
				.then(snapshot => snapshot.val())
			if(result) {
				const key = Object.keys(result)[0]
				await db.ref().child('/transactions/'+ key).update(req.body)
				.then(() => {
					res.status(200).send("payment success")
				})
			} else res.status(404).send("Error: transaction not found")
			
		})
		 
		server.post('/api/charges/internet-banking', (req, res) => {
			const { amount, currency, offsite, return_uri } = req.body
			return omise.charges.create({
				amount: amount * 100,
				currency,
				offsite,
				return_uri
			}).then(function (charge) {
				res.status(200).send(JSON.stringify(charge))
			}).error(function (err) {
				console.log('error:', err)
			}).done()
		})

		server.get('/api/charges/internet-banking/:chargeId', (req, res) => {
			const { chargeId } = req.params
			return omise.charges.retrieve(chargeId, function(error, charge) {
				if(!error)
					res.status(200).send(JSON.stringify(charge))
				else console.log('error:', error)
			});
		}) 

		server.get('/payment/:transaction_id', (req, res) => {
			const actualPage = '/payment'
			const queryParams = {
				transactionID: req.params.transaction_id,
			}
			app.render(req, res, actualPage, {...process.env,queryParams})
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
			app.render(req, res, actualPage, {...process.env,queryParams})
		})

		server.get('*', (req, res) => {
			return handle(req, res,'*', process.env)
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
