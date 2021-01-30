import {createStore,applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'remote-redux-devtools';
import rootReducers from  '../Redux/reducers/rootReducers'



const store = createStore(rootReducers,composeWithDevTools(applyMiddleware(thunkMiddleware)))
//const store = createStore()
console.log('toko : ','store')

export default store
