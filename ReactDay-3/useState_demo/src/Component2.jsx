import { useState } from "react";

function Component2 () {

    const[name , setName] = useState();
    const[age, setAge] = useState();

    function function1(x) {
        setName(x.target.value);
    }

    function function2(y){
        setAge(y.target.value);
    }
    
    return(

        <>
        <input type="text" placeholder="Enter your name" onChange={function1}/>
        <input type="text" placeholder="Enter your age" onClick={function2}/>
        <h1>{name}</h1>
        <h1>{age}</h1>
        </>
    )
}

export default Component2;