//ek hook hai ye tabhi use karna hai jab calculation heavy ho
//variable and setter functions return hota hai value in useState()  
import { useMemo } from "react";

export const ExampleUseMemo=()=>{
    
    const [count,setCount] = useState(0);
 
    return(
        <>
            <ChildComp count={count} setCount={setCount}/> 
        </>
    );
}