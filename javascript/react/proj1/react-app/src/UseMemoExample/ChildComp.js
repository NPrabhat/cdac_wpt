export const ChildComp=({count,setCount})=>{

    return(
        <>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment Count</button>
        </>
    );
}