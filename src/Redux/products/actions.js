import axios from "axios"
import { POST_REQUEST } from "./actionTypes"

export const addProducts=()=>{
    return(dispatch)=>{
      dispatch({type:POST_REQUEST})
      axios.post()
    }
}