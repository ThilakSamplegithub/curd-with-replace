import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes"

export const login=(newData)=>{
    return (dispatch)=>{
        dispatch({type:LOGIN_REQUEST})
        axios.post(`https://reqres.in/api/login`,newData)
       .then(res=>dispatch({type:LOGIN_SUCCESS,paylaod:res.data.token}))
       .catch(()=>dispatch({type:LOGIN_FAILURE}))
    }
}