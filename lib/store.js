import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistCombineReducers } from 'redux-persist'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'
const initialState = {}
const enhancers = []
const loggerMiddleware = createLogger()
import storage from 'redux-persist/lib/storage'
const middleware = [
	thunk, loggerMiddleware
]

const config = {
	key: 'primary',
	storage
}

let reducer = persistCombineReducers(config,rootReducer)

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

persistStore(store,
null,
()=> {store.getState()}
)

export default store
