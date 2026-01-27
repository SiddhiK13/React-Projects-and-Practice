import ReactDOM from "react-dom";
import Component1 from "./Component1";
import Propsdrilling from "./Propsdrilling";


function App(){

  // create portal 1 method

  // return ReactDOM.createPortal(
  //   <h1>This is portal example</h1>,
  //   document.getElementById("portal-root")
  // )


  return(
    <>
    {/* portal method 2 */}
    {/* <Component1/> */}

    <Propsdrilling/>

    </>
  )
}

export default App;