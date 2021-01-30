import Axios from 'axios'
import * as types from '../constants/actionTypes'
import {BASE_URL} from '../constants/general'

console.log('action 0')
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

export const getUserId = () =>{
    
    return async(dispatch) => {
        
        try{
          
            dispatch( getRequest() )
            const response = await Axios.get
            ( BASE_URL)    
          
            dispatch(getSuccess(response))
            return true
          
                      
        }

        catch (error) { dispatch (getFailure(error)) 
            return false
           
        }
    }


}

