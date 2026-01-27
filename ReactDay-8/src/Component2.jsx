import {useEffect} from "react";

function Component2(){
    useEffect(()=>{
        console.error("this is useeffect example");
    })

    useEffect(()=>{
        alert("useEffect example");
    })

    return(
        <>
        
        </>
    )
}

export default Component2;