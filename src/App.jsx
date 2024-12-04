import React from "react";
import Navbar from "./components/navbar";
import Update from "./components/Update";
import Hook from "./components/hook";
import Gallery from "./components/gallery";


function App() {

  return (
    <>
      <Navbar/>
      <h1 className='text-2xl'>This is react series</h1>
      <Update/>
      <Hook/>
      <Gallery/>
    </>
  )
}

export default App
