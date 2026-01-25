
function Child ({attr1}){

    return (

        <input type="text" placeholder="type Something" onChange={(x)=>attr1(x.target.value)} />
    
        
    )     
    
}

export default Child;