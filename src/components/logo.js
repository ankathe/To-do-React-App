import React from "react";
import logo from '../images/Projects-logo.png';
import './logo.css';

function Logo() {
    return(
        <div className="container-logo">
            <img alt="logo" src={logo} className="img-logo"/>
        </div>
    )
};

export default Logo;