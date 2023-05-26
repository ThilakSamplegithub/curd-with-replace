import { useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import { styled } from "styled-components"
import { login } from "../Redux/authentication/actions"
export const Login=()=>{
    const dispatch=useDispatch()
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    function handleLogin(){
        const newData={email,password}
        dispatch(login(newData))
    }
    const auth=useSelector((state)=>state.authReducer.isauth)
    console.log(auth)
    return<WRAPPER auth={auth}>
        <h1>LOGIN</h1>
       <div><input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" /></div>
        <div><input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} /></div>
        <button onClick={handleLogin}>Login</button>
    </WRAPPER>
}
const WRAPPER=styled.div`
 h1{
    color:${(({auth})=>(auth?"green":"red"))}
 }
`
