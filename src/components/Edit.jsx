import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import { useContext } from "react";
import { toast } from "react-toastify";
function Edit()
{
 const {id}=   useParams()
    const navigate =useNavigate()
    const[Products,setProducts]=useContext(ProductContext)
    const [product,setproduct]=useState({
        title:"",
        description:"",
        price:"",
        category:"",
        image:""
    });
    const Changehandler=(event)=>
    {
    //    console.log(event.target.name,event.target.value);
    setproduct({...product,[event.target.name]:event.target.value})
    }
    
console.log(product);
    useEffect(()=>{
        setproduct(()=>Products.filter((p,index)=>p.id==id)[0])
     },[id])
    const handleSubmitForm=(e)=>
    {
       e.preventDefault();
      if(product.title.trim().length<5 || product.image.trim().length<4 ||product.category.trim().length<4 || product.price.trim().length<1||product.description.trim().length<8 )
      {
      alert("Every Field  must have atleast 4 characters")
      return
       }
          
const productIndex= Products.findIndex((prod)=>prod.id==id);

const copyData=[...Products]
copyData[productIndex]={...Products[productIndex],...product}




       setProducts(copyData)
       localStorage.setItem("Products",
      JSON.stringify(copyData));
      toast.success("Data Edited Successfully");
       navigate(-1);
      

    }

    return (
        <form onSubmit={handleSubmitForm} className="w-screen h-screen p-[8%] flex flex-col items-center">
        <h1 className="w-1/2 font-bold text-red-400 mb-3 text-2xl">Add Details</h1>
        <input onChange={Changehandler} name="image"  type="url" placeholder="Image Url" value={product && product.image} className="w-1/2 mb-3 text-xl bg-zinc-100 font-semibold rounded p-2 "/>
        <input onChange={Changehandler} name="title"  type="text" placeholder="Title" value={product && product.title} className="w-1/2 mb-3 text-xl bg-zinc-100 font-semibold rounded p-2 "/>
          <div className="w-1/2 flex justify-between">
          <input onChange={Changehandler} name="category"  type="text" placeholder="Category" value={product && product.category} className="w-[47%] mb-3 text-xl bg-zinc-100 font-semibold rounded p-2 "/>
          <input onChange={Changehandler} name="price"  type="number" placeholder="Price" value={product && product.price} className="w-[46%] mb-3 text-xl bg-zinc-100 font-semibold rounded p-2 "/>
          </div>
          <textarea
          
          rows="10"
          className="w-1/2 mb-3 text-xl bg-zinc-100 font-semibold rounded p-2 "
          placeholder="Description"
          onChange={Changehandler} 
          name="description"
          value={product && product.description}
          
          
          >

          </textarea>
        <div className="w-1/2">
        <button className="px-5 py-2 rounded border border-blue-300 text-blue-300">Edit Product</button>
        </div>
       </form>
          

    );
}

export default Edit;