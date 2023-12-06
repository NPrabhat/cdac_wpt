import { useState } from "react";
import { About } from "./About";
export function Content(props){

      const [name,setName]= useState("");


      const [number1,setNum1] = useState(0);
      const [number2,setNum2] = useState(0);

      function add(){
        alert(parseInt(number1)+parseInt(number2)) ;
      }

    return(
        <div>
            <div className="alert alert-light" style={{height:"auto",
                                                       backgroundColor:"navy",
                                                       color:"white"
                                                      }}>
                <p>
                    
                    This is a Content<br/>
                    This is a Content<br/>
                    This is a Content<br/>
                    This is a Content<br/>
                    This is a Content<br/>
                    This is a Content<br/>
                    This is a Content<br/>
                    This is a Content<br/>
                    This is a Content<br/>
                    This is a Content<br/>
                    This is a Content<br/>
                    This is a Content<br/>
                    This is a Content<br/>
                    This is a Content<br/>
                    This is a Content<br/>
                </p>
                <About/>    
                <input type="text" value={name} onChange={function(event){
                        setName(event.target.value);
                }}/>
                <button className="btn btn-info" onClick={function(){
                    props.printName(name)
                }}>Your Name</button>

                <hr/>



                <input type="number" value={number1} onChange={function(event){
                        setNum1(event.target.value);
                }}/>
                <input type="number" value={number2} onChange={function(event){
                        setNum2(event.target.value);
                }}/>
                <button className="btn btn-info" onClick={add}>Calculate</button>
                <h1>{add}</h1>
            </div>
        </div>
    );
}