export const addMessage = (msg) => {
	return {
  type: 'ADD_MESSAGE',
	payload : msg
}};

export const loadMessageAction = (arrMsg) => { 
	return {
	type: 'LOAD_MESSAGE',
	payload: arrMsg
}};