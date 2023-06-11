import React from "react";
import "./header.css"

export default function Navbar({changeState}){
    const [darckMode,setDarckmode]=React.useState(false)                //false for day mode and true for night mode
    function changeMode(){                                          //toggle between nigth and day mode
        setDarckmode((prev)=>!prev)                                   //change mode in header
        changeState()                                                   //call setstate function in App component
    }
    return(
        <div className={darckMode ? "header darck" : "header"}>   
            <span>where in the world?</span>
            <div className="header-right">
                <div className="dark-mode" onClick={changeMode}></div>  {/* onclick change mode */}
                <span>darck mode</span>
            </div>
        </div>
    )
}