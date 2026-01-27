import { createContext, useState } from "react"
import One from "./One";


const Details = createContext();

function App() {

  const[name, setName] = useState();
  const[mark, setMarks] = useState();

  const[data, setData] = useState([]);

  function getName(event){
    setName(event.target.value);
  }

  function getMarks(event){
    setMarks(event.target.value);
  }

  function getdata(){
    setData({name, mark})
  }

  return (
    <>

    <div>
      <input type="text" placeholder="Enter your name" onChange={getName} />

      <input type="text" placeholder="Enter your marks" onChange={getMarks}/> <br /> <br />

      <button type="button" onClick={getdata}>Submit</button>

      <Details.Provider value={data}>

        <One/>

      </Details.Provider>

      
      
    </div>
     
    </>
  )
}

export default App
export {Details}
