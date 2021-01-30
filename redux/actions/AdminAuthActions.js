import Axios from 'axios'
import { Alert } from 'react-native'
import * as types from '../constants/actionTypes'
import {LOGIN_ADMIN_URL} from '../constants/general'

console.log('action 0 auth')
export const getRequest = () =>({
    type : types.GET_REQUEST
})

export const getSuccess = (data) =>({
    type : types.GET_SUCCESS,
    dataAction : data    
  })

export const getFailure = (error) =>({
    type : types.GET_FAILURE,
    error  

})

export const getAdminAuth = (email,password) =>{
    console.log('getAdminAuth() :')
    return async(dispatch) => {
        
        try{
            console.log('action request auth ') 
            dispatch( getRequest() )
            const response = await Axios.post(LOGIN_ADMIN_URL,
                  {
                    email,
                    password
                  } 
               )    
            console.log('action request auth done')
            
            
            console.log('action success auth ')
            dispatch(getSuccess(response))
            console.log('data Action :',response.data.token) 
            console.log('action success auth done') 
            return true                    
        }

        catch (error) { dispatch (getFailure(error)) 
            console.log('action failed auth') 
            Alert.alert('Email or Password Incorrect')
            return false
        }
    }


}

