import * as types from '../constants/actionTypes'
console.log('reducer 0 auth')
const initialState ={
    isOut : false, 
    loading : false,
    error : null,
    token : null
}
    console.log('reducer 1 auth')        
function AdminAuthReducers (state=initialState,action) {
    console.log('reducer 2 auth')
    switch (action.type) {
        case types.GET_REQUEST:  
            console.log('reducer request auth ')
            return Object.assign({}, state, {
                  loading: true,
            
            });
            
            break;

        case types.GET_SUCCESS :  
        console.log('reducer success auth')
           
            return Object.assign({}, state, {
                isOut:true,
                loading: false,
                token: action.dataAction.data.token
            });
            
            break;
        case types.GET_FAILURE :  
        console.log('reducer failed auth')
           
            return Object.assign({}, state, {
                    loading : false,
                    error : action.error

            });
            break;
            default : return state

        } 
    }

    export default AdminAuthReducers





