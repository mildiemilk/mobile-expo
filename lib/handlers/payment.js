import axios from 'axios'

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
	axios({
		method: 'post',
		url:'https://api.omise.co/charges',
		withCredentials: true,
		headers: {
			'Content-Type': 'text/plain',
			'X-Frame-Options': 'SAMEORIGIN',
			'X-Content-Type-Options': 'nosniff',
			'Access-Control-Allow-Headers': 'Content-Type',
			'X-Requested-With': 'XMLHttpRequest',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Credentials': 'true',
			'Access-Control-Allow-Methods': 'POST'
		},
		auth: {
			username: 'skey_test_56u0cmouwglb4b9etxp'
		},
		params: {
			description: 'dateamountname',
			amount: '696969',
			currency: 'thb',
			return_uri: 'http://localhost:3000',
			card: card
		}
	})
}