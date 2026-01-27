import { useRef } from "react";

function Component1(){
    const a = useRef();

    const focus = () => {
        a.current.focus();
    }

    return(
        <>

        <input type="text" placeholder="enter your name" ref={a} /> <br /><br />

        <button type="button" onClick={focus}>Submit</button>
        
        </>
    )

}

export default Component1;