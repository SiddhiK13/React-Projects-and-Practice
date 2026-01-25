import Props_demo from "./Props_demo.jsx";
import Navbar from "./Navbar.jsx";

function App() {

  let myname = ["Siddhi"];

  let nav = ["Home", "About", "Services", "Contact"];

  return (
    <>
      <Props_demo attr1={myname}/>
      <Navbar attr2 = {nav}/>
    </>
  )
}

export default App
