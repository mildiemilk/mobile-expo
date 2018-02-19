export const CHECK_PASSWORD = 'CHECK_PASSWORD'


export const checkPassword = password => ({
	type: CHECK_PASSWORD,
	payload: password === process.env.ADMIN_PASSWORD
})
