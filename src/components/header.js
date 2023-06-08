import React from "react";
import "./header.css"

export default function Navbar(props,{changeState}){
    const [darckMode,setDarckmode]=React.useState(false)
    function changeMode(){
        setDarckmode((prev)=>!prev)
        props.changeState()
    }
    console.log(darckMode)
    return(
        <div className={darckMode ? "header darck" : "header"}>
            <span>where in the world?</span>
            <div className="header-right">
                <div className="dark-mode" onClick={changeMode}></div>
                <span>darck mode</span>
            </div>
        </div>
    )
}