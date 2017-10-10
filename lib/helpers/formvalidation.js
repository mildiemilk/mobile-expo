const ERROR = 'error'
const SUCCESS = 'success'
const WARNING = 'warning'

const validateRule = (noCondition, warningCondition, errorCondition) => noCondition? null :errorCondition ? ERROR: warningCondition ? WARNING : SUCCESS

const validateLength = (inputLength, warningLength, errorLength) => validateRule(inputLength === null, inputLength < warningLength, inputLength < errorLength )

const validateEmailRegex = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return email === null ? null : re.test(email) ? SUCCESS: ERROR
}

const status = (statusArray) => statusArray.indexOf('error')> 0 ? 'error' : statusArray.indexOf('warning') > 0 ? 'warning': 'success'

export const validateEmail = ( email ) => {
	let validateLengthResult = email? validateLength(email? email.length : null, 10, 10) : null
	let validateEmailResult = validateEmailRegex(email)
	let errorText = []
	errorText = 
		validateLengthResult === 'error' ? [ ...errorText, "email length must be more than 10"] : errorText
	errorText =
		validateEmailResult === 'error' ? [...errorText, "email must be in email format"] : errorText
	let statusArray = [validateLengthResult, validateEmailResult]
	let statusResult = status(statusArray)
	return ({status: statusResult,errorText})
}

export const validatePassword = ( password ) => {
	let validateLengthResult = validateLength(password? password.length : null, 8, 8)
	let validatePasswordResult = validatePasswordRegex(password)
	let errorText = []
	errorText =
		validateLengthResult === 'error' ? [...errorText, 'password must be more that 8 characters'] : errorText
	errorText =
		validatePasswordResult === 'error' ? [...errorText, 'password must have capital and small letter and number'] : errorText
	return({status: status([validateLengthResult, validatePasswordResult]),errorText})
}

export const validatePasswordConfirmation = ( password, passwordConfirm ) => {
	var status = password === passwordConfirm ? SUCCESS : ERROR
	var errorText = status === ERROR ? ["password confirmation has to match password"] : []
	return({status,errorText})
}

const validatePasswordRegex = (password) => {
	const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
	return password === null ? null : re.test(password) ? SUCCESS : ERROR
}
