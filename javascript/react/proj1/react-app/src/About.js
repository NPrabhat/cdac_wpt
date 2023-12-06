import vegeta from "./vegeta.jpg"
import ultraEgo from "./vegeta-ultra-ego.jpg"

export const About=()=>{
    const image1=require("./vegeta-ultra-ego.jpg")
    // const image2 = require("./vegeta.jpg")

    return (
        <>
          <h1 className="text-info">About Page</h1>  
          <div></div>
          <img src={vegeta} height="200" />
          <img src={image1} height="200" />
          <p>THis is a about page text</p>
          <p>THis is a about page text</p>
          <p>THis is a about page text</p>
          <p>THis is a about page text</p>
          <p>THis is a about page text</p>
          <p>THis is a about page text</p>
          <p>THis is a about page text</p>
        </>
    );
}