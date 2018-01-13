export const GET_PROFILE = 'GET_PROFILE'
export const GET_TABLE = 'GET_TABLE'

export const getProfile = props => ({
	type: GET_PROFILE,
	payload: props
})

export const getTable = props => ({
	type: GET_TABLE,
	payload: props
})

