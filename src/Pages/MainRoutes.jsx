import {Routes,Route} from "react-router-dom"
import { HomePage } from "./HomePage"
import { Admin } from "./Admin"
import { Login } from "./Login"
export const MainRoutes=()=>{
    return <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/admin" element={<Admin/>}/>
</Routes>
}
