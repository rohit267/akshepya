import React from 'react';
import logo from "./Shepya.png"


function index(props) {
    return (
        <img src={logo} style={{width:props.width,padding:"0"}}></img>

       );
}

export default index;