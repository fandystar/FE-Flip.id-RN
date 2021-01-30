import Axios from 'axios'
import * as types from '../constants/actionTypes'
import {GET_USER_URL} from '../constants/general'

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

export const getUserId = (token) =>{
    console.log('getUserId() :')
    return async(dispatch) => {
        
        try{
            console.log('action request ') 
            console.log('token : ',token)
            dispatch( getRequest() )
            const response = await Axios.get
            ( 'https://pacific-oasis-23064.herokuapp.com/user/id',{
                    headers : { token : token }
            })    
            console.log('action request done')
            
            
            console.log('action success ')
            dispatch(getSuccess(response))
            return true
            console.log('data Action :',response.data) 
            console.log('action success done') 
                      
        }

        catch (error) { dispatch (getFailure(error)) 
            return false
            console.log('action failed') 
        }
    }


}

