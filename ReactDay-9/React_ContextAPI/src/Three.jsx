import {Firstname, Lastname} from "./App";


function Three(){
    return(
        <>

        <Firstname.Consumer>
            {
                (x)=>{
                    return(

                        <Lastname.Consumer>
                            {
                                (y)=>{
                                    return(

                                        <h1>My name is {x} {y}</h1>
                                    )
                                }
                            }
                        </Lastname.Consumer>
                    )
                }
            }
        </Firstname.Consumer>
        
        </>
    )
}
export default Three;