import React from "react";
import './Krisztian.css';
import logo from '../img/krisz.png';

function Krisztian() {
    return (
        <div className="main krisztian">
            <img src={logo} alt="krisz" />
            <div className="pb-3"></div>
        </div>
    );
}

export default Krisztian;