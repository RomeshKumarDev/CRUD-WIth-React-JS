import React, { createContext, useEffect, useState } from "react";
import axios from "../utils/axios";
export const      ProductContext=createContext()
function Context(props)
{
    const[Products,setProducts]=useState(null)


const getProducts=async() =>{
    try {
        const {data}= await axios("/products")
        setProducts(data)
       

    }
    catch (error) {
        console.log(error)
    }
}
useEffect(()=>{
    getProducts()
},[])




    return(
        <ProductContext.Provider value={[Products,setProducts]}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default Context;