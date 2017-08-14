import axios from 'axios'
import Router from 'next/router'
import store from '../store'
const publicKey='pkey_test_56u0cmouamrudc8eefv'
const secretKey='skey_test_56u0cmouwglb4b9etxp'

export const createToken = async () => {
	const  name = 'john doe', card = '4242424242424242', securityCode='123', expiryMonth='7', expiryYear='2019'
	const response = await axios({
		method: 'post',
		url:`https://vault.omise.co/tokens?card[name]=${name}&card[number]=${card}&card[security_code]=${securityCode}&card[expiration_month]=${expiryMonth}&card[expiration_year]=${expiryYear}`,
		auth: {
			username: 'pkey_test_56u0cmouamrudc8eefv'		
		}
	})
	return(response.data.id)
}


export const createPayment = async () => {
	var card = await createToken()

	console.log('card', card)

	Router.push(
		{
			pathname:'/pay', 
			query: {
				card: card,
				description: 'card test',
				currency: 'thb',
				capture: false,
				amount: 100
			}
		})

	// await omise.charges.create({
	// 	'description': 'Charge for order ID: 888',
	// 	'amount': '100000', // 1,000 Baht
	// 	'currency': 'thb',
	// 	'capture': false,
	// 	'card': card
	// }, function(err, resp) {
	// 	if (resp.paid) {
	// 		//Success
	// 		console.log('return function',resp)
	// 	} else {
	// 		//Handle failure
	// 		console.log('return error' , resp)
	// 		throw resp.failure_code;
	// 	}
	// });
	// axios({
	// 	method: 'post',
	// 	url:'https://api.omise.co/charges',
	// 	withCredentials: true,
	// 	headers: {
	// 		'Content-Type': 'text/plain',
	// 		'Access-Control-Allow-Headers': 'Content-Type',
	// 		'X-Requested-With': 'XMLHttpRequest',
	// 		'X-Frame-Options': 'SAMEORIGIN',
	// 		'X-Content-Type-Options': 'nosniff',
	// 		'Access-Control-Allow-Origin': '*',
	// 		'Access-Control-Allow-Credentials': 'true',
	// 		'Access-Control-Allow-Methods': 'POST'
	// 	},
	// 	auth: {
	// 		username: 'skey_test_56u0cmouwglb4b9etxp'
	// 	},
	// 	params: {
	// 		description: 'dateamountname',
	// 		amount: '696969',
	// 		currency: 'thb',
	// 		return_uri: 'http://localhost:3000',
	// 		card: card
	// 	}
	// })
}
