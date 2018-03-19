import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistCombineReducers } from 'redux-persist'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage'
const initialState = {}
const enhancers = []
const loggerMiddleware = createLogger()
const middleware = [thunk, loggerMiddleware]
const config = {key: 'primary',storage}

let reducer = persistCombineReducers(config,rootReducer)


const composeEnhancers = compose(
	composeWithDevTools( applyMiddleware(...middleware)),
	...enhancers
)
const store = createStore(rootReducer,initialState,composeEnhancers)

persistStore(store,null,()=> {store.getState()})

export default store
