export function Header(props){
    // console.log(props)

    // props.show();

    return(
        <div>
            <div className="alert alert-success" style={{backgroundColor:"white"}}>
                <strong>This is Header {props.person.name}-{props.person.age}-{props.person.sal}</strong><br/>
                {/* <strong>Names {props.names[0]}-{props.names[1]}-{props.names[2]}</strong><br/> */}
                <h1>Names</h1>
                    <ul>
                        {props.names.map(function(p){
                            return (
                            <li>{p.name}---{p.age}---{p.mobile}</li>
                            );
                        })}
                    </ul>   
                <button onClick={props.showDetails}>Show</button>
            </div>
        </div>
    );
}