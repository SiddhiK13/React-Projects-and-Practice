function Propsdrilling(){

    function Gransparent(){
        const message = "data sent from grandparent to child";
        return <Parent data={message}/>
    }

    function Parent({data}){
        return <Child data = {data}/>
    }

    function Child({data}){
        return <h1>{data}</h1>
    }

    return(

        <>
         <h1>This is Propsdrilling Example</h1>

         <Gransparent/>
        </>
    )
}


export default Propsdrilling;