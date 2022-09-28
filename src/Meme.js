import React from "react";

export default function meme(){
    return (
        <div className="main">
            <form className="form">
                <div className="inputs">
<input className="form-inputs" type="text" placeholder="top text" ></input>
<input className = "form-inputs" type="text" placeholder="bottom text"></input>
                </div>
                <button className="meme--button">Get a new meme image</button>
                <img src={"./images/meme.png"} alt="" height="300px" width="500px"/>
            </form>
            
        </div>
    )
}