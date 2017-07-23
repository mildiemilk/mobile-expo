import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'
const initialState = {}
const enhancers = []
const loggerMiddleware = createLogger()
const middleware = [
	thunk, loggerMiddleware
]

if (process.env.NODE_ENV === 'development') {
	const devToolsExtension = typeof window !== 'undefined'? window.devToolsExtension : null
	if(typeof devToolsExtension === 'function') {
		enhancers.push(devToolsExtension())
	}
}

const composeEnhancers = compose(
	applyMiddleware(...middleware),
	...enhancers
)
const store =  createStore(
	rootReducer,
	initialState,
	composeEnhancers
)
export default store