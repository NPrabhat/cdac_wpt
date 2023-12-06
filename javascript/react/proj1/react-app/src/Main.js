//The js files are called modules
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { ExampleUseEffect } from "./ExampleUseEffect";
import { ExampleUseRef } from "./ExampleUseRef";
import "./main.css"
import { ExampleModuledCss } from "./ExampleModuledCss";

export function Main(){
    
    function showDetails(){
        alert("Hello");
    }
    
    const sal = 23000;

    const person={name:"Tirthesh",age:23,sal:sal};

    // const names = ["Umesh","Preeti","Kavindra"];

    function printName(name){
        alert("Name: "+name);   
    }


    const names = [
        {name:"Prabhat",age:22,mobile:"4567891230"},
        {name:"Rohit",age:24,mobile:"1234568790"},
        {name:"Milind",age:21,mobile:"321654980"},
        {name:"Shashank",age:23,mobile:"0741258963"},
        {name:"Harshal",age:25,mobile:"8527413609"}   
    ]

    return(
        <div>
            <div>
                Hello this is a <span className="text-decor">React Code</span>
            </div>
            {/* <Header person={person}  showDetails={showDetails} names={names} />
            <Content printName={printName}/>
            <Footer/> */}
            {/* <ExampleUseEffect /> */}
            {/* <ExampleUseRef/> */}
            <ExampleModuledCss/>
        </div>
    );
}