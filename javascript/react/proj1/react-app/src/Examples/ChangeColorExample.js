import { tab } from "@testing-library/user-event/dist/tab";
import { useRef, useState } from "react";

export const ChangeColorExample=()=>{
    
    const [color,setColor] = useState("")
    const colorRef = useRef();
    
    // function showColor(){
    //     changeColor = colorRef.target.value;
    //     setBackgroundColor = changeColor;
    // }



    return (
        <>
            {/* <input type="text" value={color} onChange={function(event){setColor(event.target.value)}} /> */}

            {/* <input type="text" value={color} /> */}
            <div style={{height:"200px",width:"300px",backgroundColor:color}}></div>
        </>
    );
}