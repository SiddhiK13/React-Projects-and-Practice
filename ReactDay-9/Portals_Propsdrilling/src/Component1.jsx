import ReactDOM from "react-dom";

function Component1(){
    return ReactDOM.createPortal(

        <div style={{backgroundColor:"Yellow", fontSize:"20px", padding:"30px"}}>
        <h1>This is Portal example 1</h1>
        <h2>This is Portal example 2</h2>
        </div>,
        document.getElementById("portal-root")
     
    )
}
export default Component1;