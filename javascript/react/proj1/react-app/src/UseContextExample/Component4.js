import { useContext } from "react";
import { NameContext } from "./WithUseContext/Component1With";
export const Component4=()=>{
    const person = useContext(NameContext);
    return(
        <>
            <div className="alert alert-danger">
                <h1>Component 4</h1> 
                <h2>Name is :{person.name}</h2> 
                <h2>Age  is :{person.age}</h2> 
                <h2>Mobile is :{person.mobile}</h2> 
            </div>
        </>
    );
}