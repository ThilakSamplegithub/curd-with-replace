import { useState } from "react"
import { useDispatch } from "react-redux"
import { styled } from "styled-components"

export const Admin=()=>{
    const initialFormState={
        image:"",
        price:"",
        gender:"",
        brand:"",
        category:""
    }
    const dispatch=useDispatch()
    const [formState,setForm]=useState(initialFormState)
    const {price,gender,brand,category,image}=formState
    const handleChange=(e)=>{
        const newForm={...formState,[e.target.name]:e.target.value}
        setForm(newForm)
    }
    function handleSubmit(e){
        e.preventDefault()
        console.log(formState)
        
    }
    return<DIV>
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="enter imageurl" name="image" value={image} onChange={handleChange} />
    <input  type="number" placeholder="enter price" name="price" value={price} onChange={handleChange} />
    <input type="text" placeholder="enter brand" name="brand" value={brand} onChange={handleChange} />
    <select name="gender" value={gender} onChange={handleChange} >
        <option value="">Select Gender</option>
        <option value="male">Men</option>
        <option value="female">Women</option>
        <option value={"kids"}>kids</option>
    </select>
    <select value={category} onChange={handleChange}>
        <option value={""}>Select Category</option>
        <option value="top_wear">Top-wear</option>
        <option value="bottom_wear">Bottom-wear</option>
        <option value="kids_wear">Kids-wear</option>
    </select>
    <button type="submit">Add</button>
    </form>
    </DIV>
}
const DIV=styled.div`
form{
    display:flex;
    flex-direction:column;
    width:50%;
    margin:auto;
    gap:10px;
}
`
