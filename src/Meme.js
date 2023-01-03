import React from "react";
import data from "./data";

export default function Meme(){
    const [memeImage , setMemeImage] = React.useState({
        topText:'',
        bottomText:'',
        randomImage:"https://i.pinimg.com/236x/09/46/cb/0946cb6bf7ba97bd496adbc6f340f1ba.jpg"
    });

    const [allMemeImages , setAllMemeImages] = React.useState(data) 
   let url ;
    function getMemeImage(){
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMemeImage(prevMemeImage => ({
            ...prevMemeImage,
            randomImage:url
        }))
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

                <img src={memeImage.randomImage} alt="" height="300px" width="500px"/>
            </form>
            
        </div>
    )
}