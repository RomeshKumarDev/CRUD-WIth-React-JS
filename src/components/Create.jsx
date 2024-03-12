import React, { useContext, useState } from "react";
import { nanoid } from "nanoid";
import { ProductContext } from "../utils/Context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Create()
{
  const navigate =useNavigate()
const[Products,setProducts]=useContext(ProductContext)
 const[title,setTitle]=   useState("")
 const[Image,setImage]= useState("")
const[catagory,setCatagory]=useState("")
const[Price,setPrice]=useState("")
const[Description,setDescription]= useState("")
const handleSubmitForm=(e)=>
{
   e.preventDefault();
  if(title.trim().length<5 || Image.trim().length<4 || catagory.trim().length<4 || Price.trim().length<1|| Description.trim().length<8 )
  {
  alert("Every Field  must have atleast 4 characters")
  return
   }
   else{
      const product={
         id:nanoid(),
         title:title,
         image:Image,
         category:catagory,
         price:Price,
         description:Description
   }
   setProducts([...Products,product])
   localStorage.setItem("Products",
    JSON.stringify([...Products,product]));
    toast.success("Product Added successfully")
   navigate("/");
  }
}
 
    return(
       <form onSubmit={handleSubmitForm} className="w-screen h-screen p-[8%] flex flex-col items-center">
        <h1 className="w-1/2 font-bold text-red-400 mb-3 text-2xl">Add Details</h1>
        <input onChange={(e)=> setImage(e.target.value)}  type="url" placeholder="Image Url" value={Image} className="w-1/2 mb-3 text-xl bg-zinc-100 font-semibold rounded p-2 "/>
        <input onChange={(e)=> setTitle(e.target.value)}  type="text" placeholder="Title" value={title} className="w-1/2 mb-3 text-xl bg-zinc-100 font-semibold rounded p-2 "/>
          <div className="w-1/2 flex justify-between">
          <input onChange={(e)=> setCatagory(e.target.value)}  type="text" placeholder="Category" value={catagory} className="w-[47%] mb-3 text-xl bg-zinc-100 font-semibold rounded p-2 "/>
          <input onChange={(e)=> setPrice(e.target.value)}  type="number" placeholder="Price" value={Price} className="w-[46%] mb-3 text-xl bg-zinc-100 font-semibold rounded p-2 "/>
          </div>
          <textarea
          
          rows="10"
          className="w-1/2 mb-3 text-xl bg-zinc-100 font-semibold rounded p-2 "
          placeholder="Description"
          onChange={(e)=> setDescription(e.target.value)} 
          value={Description}
          
          
          >

          </textarea>
        <div className="w-1/2">
        <button className="px-5 py-2 rounded border border-blue-300 text-blue-300">Create</button>
        </div>
       </form>
          
    )
}
export default Create