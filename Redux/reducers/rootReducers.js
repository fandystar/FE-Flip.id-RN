import { combineReducers } from 'redux'

import GetTransansactionsReducers from './GetTransansactionsReducers'

const rootReducers  = combineReducers
({GetTransansactionsReducers})
console.log('root reducer')

export default rootReducers