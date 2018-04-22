const express = require('express')
const next = require('next')
const cors = require('express-cors')
const bodyParser = require('body-parser')
const axios = require('axios')
const exphbs = require('express-handlebars')
const path = require('path')
const nodemailer = require('nodemailer')
import loadFirebase from './lib/database'
import { updateUserTransaction, updateUserWallet } from './lib/handlers/payment'
require('dotenv').config()

const dev = process.env.NODE_ENV !== 'production'
const app = next({
	dev
})
const handle = app.getRequestHandler()
const SECRET_KEY = process.env.OMISE_SECRET_KEY
const EXPIRY_DATE = '2015-09-10'

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
				.equalTo(refno)
				.once('value')
				.then(snapshot => snapshot.val())
			if(result) {
				const key = Object.keys(result)[0]
				await db.ref().child('/transactions/'+ key).update(req.body)
				.then(() => {
					const { sellerId, sponsorId, buyerId, price, comissionCash } = result[key]
					updateUserTransaction(sellerId, sponsorId, buyerId, key)
					updateUserWallet(sellerId, sponsorId, price, comissionCash)
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

		server.post('/sendEmail',(req,res)=>{
			console.log('receive request')
			let transporter = nodemailer.createTransport({
				host: 'smtp.office365.com',
				port: 587,
				secure: false, // true for 465, false for other ports
				auth: {
					user: 'admin@sharemai.com', // generated ethereal user
					pass: '8tMX2bVjVmyMU86L' // generated ethereal password
				},
				requireTLS:true
			});
			// verify connection configuration
			transporter.verify(function(error, success) {
				if (error) {
					console.log(error);
				} else {
					console.log('Server is ready to take our messages');
				}
			});

			let mailOptions = {
				from: '"share mai" <admin@sharemai.com>', // sender address
				to: 'peakdrum@gmail.com', // list of receivers
				subject: 'node contact request', // Subject line
				text: 'Hello world?', // plain text body
				html: '<h1>hello</h1>'// html body
			};

			transporter.sendMail(mailOptions, (error, info) => {
				res.send({
					resultCode:200,
					resultText:'email sent'
				})
			});
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
