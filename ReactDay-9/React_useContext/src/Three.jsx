import { useContext } from "react";
import {Details} from "./App";


function Three(){
    
    const mydata = useContext(Details)


    return(
        <>

        <h1>{mydata.name}</h1>
        <h1>{mydata.mark}</h1>
        
        </>
    )
}
export default Three;