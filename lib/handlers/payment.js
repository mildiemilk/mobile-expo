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
	await axios.post(
		'/api/charges', {
			description: 'dateamountname',
			amount: '696900',
			currency: 'thb',
			capture: true,
			card: card
		})
	.then( res => {
		console.log(res)
	})
}
