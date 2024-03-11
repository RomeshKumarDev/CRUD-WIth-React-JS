import React, { useContext ,useEffect,useState} from 'react';
import Nav from './Nav';
import { Link, useLocation } from 'react-router-dom';
import Loading from './Loading';
import { ProductContext } from '../utils/Context';
import axios from '../utils/axios';
function Home()
{

 const [Products] = useContext(ProductContext);
 
 const {search}=useLocation();
 const category=decodeURIComponent(search.split("=")[1]);

 const[filteredProducts,setFilteredProducts] = useState(null);
 const getCategoryData=async ()=>
 {
   try{
    const {data}= await axios(`/products/category/${category}`);
    setFilteredProducts(data);

   }
   catch(err){
     console.log(err);
   }
    
 }
 useEffect(() => {
  console.log(category);
 
  if (!filteredProducts || category == undefined) {
    // If Products are not available yet, set filteredProducts to Products
    setFilteredProducts(Products);
  } 
  else if (category !== undefined) {
    // If a category is specified, fetch filtered products
    getCategoryData();
  }
}, [category,Products]);


// useEffect(()=>{
//  if(!filteredProducts) setfilteredProducts(Products)
//    if(category!=undefined)getCategoryData();
   
  
// }
// ,[category,Products]);
// console.log(filteredProducts)

    return Products?(
    <>
    <Nav />
        <div className="w-[85%]  p-10 pt-[6%] flex flex-wrap overflow-x-hidden overflow-y-auto">
{filteredProducts && filteredProducts.map((prod,index)=><Link key={index} to={`/Details/${prod.id}`} className="card mr-2 mb-2  p-3 shadow w-[18%] h-[30vh]  rounded  flex flex-col items-center justify-center">


<div className="w-full  mb-2 h-[70%] hover:scale-110 bg-contain bg-no-repeat bg-center " style={{backgroundImage:`url(${prod.image})`}}>
  </div>
  <h1 className="hover:text-sky-400 h-[30%
] text-sm overflow-auto  ">{prod.title}</h1>
</Link>)}




</div>
    </>
    ):(<Loading/>)
}
export default Home;