import React from "react";
import logo from '../images/Projects-logo.png';
import './logo.css';

function Logo() {
    return(
        <div className="container-logo">
            <a href="http://www.linkedin.com/in/katherine-cruz-7588b763" className="link">
                <img alt="logo" src={logo} className="img-logo"/> 
            </a>
            
        </div>
    )
};

export default Logo;