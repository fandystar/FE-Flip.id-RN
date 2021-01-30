import * as types from '../constants/actionTypes'
console.log('reducer 0 register')
const initialState ={
    loading : false,
    dataReducer : [],
    error : null
    
}
    console.log('reducer 1 register')        
 function UserRegisterReducers (state=initialState,action) {
    console.log('reducer 2 register')
    switch (action.type) {
        case types.GET_REQUEST:  
            console.log('reducer request register ')
            return Object.assign({}, state, {
                  loading: true,
            
            });
            
            break;

        case types.GET_SUCCESS :  
        console.log('reducer success register')
           
            return Object.assign({}, state, {
                loading: false,
                dataReducer : action.dataAction
            });
            
            break;
        case types.GET_FAILURE :  
        console.log('reducer failed register')
           
            return Object.assign({}, state, {
                    loading : false,
                    error : action.error

            });
            break;
            default : return state

        } 
    }
    export default UserRegisterReducers





