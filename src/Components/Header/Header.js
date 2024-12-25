import React from "react";
import * as H from "./Header_style"
import lives from "../Assets/Images/player.png"

export default function Header (){
    return(
    <H.headerbox>
    <section className="menu">
 
        <section className="menu-time"> 
            <h2>Time Left</h2>
            <h2 className="timeleft">0</h2>
            </section>

        <section className="menuscore">
            <h2>Your Score</h2>
            <h2 className="score">0</h2>
            </section>
            
        <section className="lives">
            <img src={lives}/>
            <h3>X3</h3>
        </section>

    </section>

    </H.headerbox>
    
    )
}