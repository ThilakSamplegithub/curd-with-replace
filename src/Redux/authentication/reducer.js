import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes"
const initialState={
    isauth:false,
    token:"",
    isLoading:false,
    isError:false
}
export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case LOGIN_REQUEST:{
            return {...state,isLoading:true}
        }
        case LOGIN_SUCCESS:{
            // console.log(isauth,'isAuth')
            return {...state,isLoading:false,isauth:true,token:payload}
        }
        case LOGIN_FAILURE:{
            return {...state,isLoading:false,isauth:false,isError:true}
        }
        default:{
            return state
        }
    }
}