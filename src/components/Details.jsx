import React, {  useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

// import axios from "../utils/axios";
import Loading from "./Loading";
import { ProductContext } from "../utils/Context";
import { toast } from "react-toastify";

function Details()
{ 
    const navigate=useNavigate();
   const {id}= useParams();
  const[Products,setProducts] =useContext(ProductContext)

  
   const [product,setProd]=useState(null);

//  Fetching Data From API using Axios
//  const getSingleProduct= async()=>
//  {
//     try{
//           const {data}=await axios.get(`/products/${id}`)
//          setProd(data);
          
//     }
//     catch(err)
//     {
//         console.log(err);
//     }
//  }

 useEffect(()=>{
   //  getSingleProduct();
//fetching Data from Product where we stored all the data
setProd(()=> Products &&   Products.filter((elem,index)=>elem.id == id)[0])


 },[]);
 const ProductDeleteHandler=(id)=>
 {
    const FilteredProduct=Products.filter((elem)=>elem.id!=id);
    setProducts(FilteredProduct);
    localStorage.setItem('Products',JSON.stringify(FilteredProduct));
    toast.success("Item Deleted successfully")
    navigate('/');
 }
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
              
              <Link  className="px-10 font-bold text-lg mr-3 py-2 rounded border border-green-300 text-green-300" to={`/edit/${product.id}`} >Edit</Link>
              <button   onClick={()=>ProductDeleteHandler(product.id)}  className="px-10 py-2  font-bold text-lg rounded border border-blue-300 text-blue-300">Delete
              </button>

                </div>
           
          
        </div>
    ):(<Loading/>);
}
export default Details;