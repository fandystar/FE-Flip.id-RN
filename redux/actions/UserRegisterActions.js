import Axios from 'axios'
import * as types from '../constants/actionTypes'
import {REGISTER_USER_URL} from '../constants/general'

console.log('action 0 register')
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

export const getUserRegister = (full_name,email,password) =>{
    console.log('getUserRegister() :')
    return async(dispatch) => {
        
        try{
            console.log('action request register ') 
            dispatch( getRequest() )
            const response = await Axios.post(REGISTER_USER_URL,
                  {
                    full_name, 
                    email ,
                    password
                  } 
               )    
            console.log('action request register done ')
            
            
            console.log('action success register ')
            dispatch(getSuccess(response))
            console.log('data Action :',response.data) 
            console.log('action success register done') 
                      
        }

        catch (error) { dispatch (getFailure(error)) 
            console.log('action failed register') 
        }
    }


}

