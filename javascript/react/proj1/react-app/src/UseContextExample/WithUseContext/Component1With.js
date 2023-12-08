import { Component2With } from "./Component2With";
import { createContext, useState } from "react";
 
export const NameContext = createContext();
 
export const Component1With=()=>{
    // const[person,setPerson]=useState({name:"Pravin",age:23,mobile:4564565});

 const persons =[
        {name:"Pravin0",age:23,mobile:4564565},
        {name:"Pravin1",age:24,mobile:5564565},
        {name:"Pravin2",age:25,mobile:6564565},
        {name:"Pravin3",age:26,mobile:7564565},
        {name:"Pravin4",age:27,mobile:8564565}
        ]

    const [person, setPerson] = useState(persons)
    return(
        <NameContext.Provider value={person}>
            <h1>Component 1 With</h1>  
            <Component2With /*name={name}*/ />
        </NameContext.Provider>
    );
}