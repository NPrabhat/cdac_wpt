import { useEffect, useState } from "react";

export const ExampleUseEffect=()=>{

    const [name,setName]= useState("");
    const [age,setAge]= useState(0);
    const [mobile,setMobile]= useState("");

    function greetings(){
        setName("Hello Harsh :)");
        setAge(23);
    }

    useEffect(function(){
        console.log("useEffect called....");
    },[age,mobile])

    return(
        <>
            <h1>useEffect Example....</h1>
            <input value={name} onChange={(event)=>setName(event.target.value)} />
            <button onClick={greetings}>Button</button>
            <input type="number" value={age} placeholder="Enter Age:" onChange={(event)=>setAge(event.target.value)} />
            <input type="tel" value={mobile} placeholder="Enter Mobile:" onChange={(event)=>setMobile(event.target.value)} />
            {/* <button onClick={greetings}>Button</button> */}
        </>
    );
}