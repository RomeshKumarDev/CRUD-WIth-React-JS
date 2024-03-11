import React from "react";


import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
function App()
{
  return (
    
<div className="h-screen w-screen flex  ">
<Link to="/" className="bg-red-300 absolute">Home</Link>
    <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/Details/:id" element={<Details/>}/>
</Routes>
      </div>
 )

}

export default App;