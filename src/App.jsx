import React from "react";

import Create from "./components/Create";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import Edit from "./components/Edit";
function App()
{
   const {search,pathname}= useLocation();
   console.log("Hey Iam in Search"+search);
   console.log("Here is your path name:"+pathname)
  
  return (

  
<div className="h-screen w-screen flex  ">
  {(pathname !="/" || search.length > 0)?(<Link to="/" className="bg-white hover:bg-sky-400 hover:text-white  text-sky-400 absolute left-72 top-7 px-5 py-1 border border-sky-400 ">Home</Link>):""}
 
    <Routes>
  <Route path="/" element={<Home/>}/>
<Route path="/create" element={<Create/>}/>
  <Route path="/Details/:id" element={<Details/>}/>
  <Route path="/edit/:id" element={<Edit/>}/>
</Routes>
      </div>
 )

}

export default App;