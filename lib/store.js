import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, autoRehydrate } from 'redux-persist'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'
const initialState = {}
const enhancers = [autoRehydrate()]
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
const store = createStore(
	rootReducer,
	initialState,
	composeEnhancers
)

persistStore(store)

export default store
