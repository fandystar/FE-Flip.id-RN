import * as types from '../constants/actionTypes'
console.log('reducer 0')
const initialState ={
    loading : false,
    error : null,
    transactions : []
    
}
               
function GetTransansactionsReducers (state=initialState,action) {
    switch (action.type) {
        case types.GET_REQUEST:  
        console.log('masuk reducer')
    
        return Object.assign({}, state, {
                  loading: true,
            
            });
            
            break;

        case types.GET_SUCCESS :  
           
            return Object.assign({}, state, {
                loading: false,
                transactions :action.payload
            });
            
            break;
        case types.GET_FAILURE :  
           
            return Object.assign({}, state, {
                    loading : false,
                    error : action.error

            });
            break;
            default : return state

        } 
    }

    export default GetTransansactionsReducers





