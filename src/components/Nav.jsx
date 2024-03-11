import React, { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";
const Nav=( )=>
{
  const [Products] = useContext(ProductContext);
  let distinct_category=
  Products && Products.reduce((acc,cv)=>[...acc,cv.category],[]);
  distinct_category=[...new Set(distinct_category)];
  const color= ()=> {
     return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},0.4)`  }
  ;
    return(
        <nav className="w-[15%] h-full bg-zinc-50 flex flex-col items-center  pt-4 ">
        <a className="px-5 py-2 rounded border border-blue-300 text-blue-300" href="/create">Add  Product</a>
        <hr className="w-[80%] mt-3"/>
        <h1 className="w-[80%] text-xl  mb-2 mt-1">Category Filter</h1>
     
        <div className="  w-[80%] "> 
        {distinct_category.map((c,i)=>(  <Link key={i} to={`/?category=${c}`} className="mb-3  flex items-center " >
            <span style={{backgroundColor:color()}} className="w-[15px] h-[15px] bg-sky-100 mr-3  rounded-full "></span>
         {c}</Link>))}
           
        </div>
      </nav>
    )
}
export default Nav;