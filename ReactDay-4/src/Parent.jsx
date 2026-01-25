import { useState } from "react";
import Child from "./Child";

function Parent() {
    const [value, setValue] =useState("");
    return (
        <>
        <h1>This is Parent Component</h1>
        <Child attr={setValue}/>
        <h2>Data from Child: {value}</h2>
        </>
    )
}

export default Parent;


