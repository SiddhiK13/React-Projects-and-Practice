import { createContext } from "react"
import One from "./One";


const Firstname = createContext();
const Lastname = createContext();

function App() {

  return (
    <>

    <Firstname.Provider value={"Siddhi"}>
      <Lastname.Provider value={"Khirsagar"}>

        <One/>


      </Lastname.Provider>
    </Firstname.Provider>
     
    </>
  )
}

export default App;
export {Firstname, Lastname}

