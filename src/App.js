import { useState } from "react";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
function App() {
  const[category,setCategory]=useState("general")
  return (
    <div className="app" >
      <Navbar setCategory={setCategory}/>
      <Hero  category={category}/>
      <div style={{backgroundColor:"rgb(23,23,23)"}}>
      <NewsBoard category={category}/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
