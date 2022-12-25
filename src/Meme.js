import React from "react";
import data from "./data";

export default function Meme(){
    const [memeImage , setMemeImage] = React.useState("./images/meme.png");
   let url ;
    function getMemeImage(){
        const memesArray = data.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }
    return (
        <div className="main">
                     <p>{url}</p>

            <form className="form">
                <div className="inputs">
    <input 
    className="form-inputs" 
    type="text"
    placeholder="top text" />

    <input 
    className = "form-inputs" 
    type="text" 
    placeholder="bottom text" />
                </div>
                <button className="meme--button"
                         onClick={getMemeImage} >
                    Get a new meme image
                    </button>

                <img src={memeImage} alt="" height="300px" width="500px"/>
            </form>
            
        </div>
    )
}