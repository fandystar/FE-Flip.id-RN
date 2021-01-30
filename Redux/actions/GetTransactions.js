import Axios from 'axios'
import * as types from '../constants/actionTypes'
import {BASE_URL} from '../constants/general'

export const getRequest = () =>({
    type : types.GET_REQUEST
})

export const getSuccess = (data) =>({
    type : types.GET_SUCCESS,
    payload : data    
  })

export const getFailure = (error) =>({
    type : types.GET_FAILURE,
    error  

})

export function getData() {
    
    return async(dispatch) => {
        
        try{
          
            dispatch(getRequest())
            const response = await Axios.get
            (BASE_URL)    
            let transactions=[]
            for ( let id in response.data) {
                transactions.push((response.data[id]))
            } 
            console.log('transaksi : ',transactions)
            dispatch(getSuccess(transactions))
            //return true
          
                      
        }

        catch (error) { dispatch (getFailure(error)) 
            //return false
           
        }
    }


}

