import { useMemo,useState } from "react";
 
export const ExampleMemo=()=>{
    
    const [count,setCount] = useState(0);
    
    const val = useMemo(function(){
        console.log("use Memo called...")
        return count;
    },[count])
 
    function printCount(){
        console.log("Value = "+count);
    }
 
    function incCount(){
        console.log("Value inc");
        setCount(count+1);
    }
 
    return(<>
        <h1>{count}</h1>
            <button onClick={printCount}>Print Count</button>
            <button onClick={incCount}>Inc Count</button>
        </>);
}