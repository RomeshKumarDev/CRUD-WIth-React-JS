import React, {  useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "../utils/axios";
import Loading from "./Loading";

function Details()
{ 
   const {id}= useParams();

  
   const [product,setProd]=useState(null);

 
 const getSingleProduct= async()=>
 {
    try{
          const {data}=await axios.get(`/products/${id}`)
         setProd(data);
          
    }
    catch(err)
    {
        console.log(err);
    }
 }
 useEffect(()=>{
     getSingleProduct();
 },[]);
    return product ? (
        <div className="w-[100%] h-full  flex px-28 py-12  ">
            <div className="w-[40%] h-[80%] overflow-hidden " >
             
<img className="w-full h-full object-contain" src={`${product.image}`}/>
            </div>
            <div className="w-[60%] h-[80%]   p-14 overflow-auto ">
              <h1 className="font-semibold text-3xl mb-5">{product.title}</h1>
              <h3 className="font-regular mb-2">{product.category}</h3>
              <h2 className="font-semibold text-red-400 mb-5 text-xl">${product.price}</h2>
              <p className="text-lg leading-none mb-8 text-justify">{product.description}</p>
              
              <Link className="px-10 font-bold text-lg mr-3 py-2 rounded border border-green-300 text-green-300" to="" >Edit</Link>
              <Link  className="px-10 py-2  font-bold text-lg rounded border border-blue-300 text-blue-300">Delete</Link>

                </div>
           
          
        </div>
    ):(<Loading/>);
}
export default Details;