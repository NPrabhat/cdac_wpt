import { useState } from "react";
export const TableComponent=()=>{

        const [num,setNum]=useState(0)
        const [table,setTable]=useState("")

        let str=""
        const showTable=()=>{
            for(let i=1;i<=10;i++){
                str += "\n"+num+"x"+i+"="+(num*i);
            }
        setTable(str);
    }

    return(
        <>
            <input type="number" value={num} onChange={function(event){setNum(event.target.value)}} />
            <button onClick={showTable}>Show Table</button>
            <div style={{whiteSpace:"pre-line",backgroundColor:"brown"}}>{table}</div>
        </>
    );
}