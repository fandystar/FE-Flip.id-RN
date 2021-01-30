import { combineReducers } from 'redux'
import UserAuthReducers from './UserAuthReducers'
import UserRegisterReducers from './UserRegisterReducers'
import UserIdReducers from './UserIdReducer'
import AdminAuthReducers from './AdminAuthReducers'

const rootReducers  = combineReducers
({UserAuthReducers,UserRegisterReducers, AdminAuthReducers})
console.log('root reducer')

export default rootReducers