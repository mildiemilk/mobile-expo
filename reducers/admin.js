import { CHECK_PASSWORD } from '../actions/admin'

const initialState = false

export default (state = initialState, action) =>{
	switch(action.type){
		case CHECK_PASSWORD: 
			return action.payload
		default: 
			return state
	}
}
