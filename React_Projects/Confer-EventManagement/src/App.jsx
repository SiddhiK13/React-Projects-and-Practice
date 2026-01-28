import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Speakers from "./pages/Speakers";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import GetTickets from "./pages/GetTickets";


function App() {

  return (
    <>
      <Navbar/>

      <Routes>


        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Speakers" element={<Speakers/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/GetTickets" element={<GetTickets/>}/>
      
      
      </Routes>
    </>
  )
}

export default App
