import React from "react"
import trollface from "./trollface.png"

function Header(){
    return(
            <header>
                <div className="hdr-center">
                <img 
                    className="header--image"
                    src={trollface}
                    alt="Epic"
                />
                <p className="header--title">Meme Generator</p>
                <a  
                    className="header--project"
                    target="_blank" 
                    href="https://github.com/LegendOfDark"
                >LegendOfDark</a>
                </div>
            </header>          
    )
}

export default Header