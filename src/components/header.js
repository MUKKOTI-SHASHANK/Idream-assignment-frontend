import React from "react";
import { Link } from "react-router-dom";
import {ImInstagram} from "react-icons/im";
import {BsFillCameraFill} from "react-icons/bs";
import "./header.css"

export default function Header(){
    return (
        <div className="header">
            <h1 className="topleft"><ImInstagram/></h1>
            <h3 className="text1">Click on camera to upload new image</h3>
            <h1 className="topright"><Link to = "/uploadview" ><BsFillCameraFill/></Link></h1>
        </div>
    )
}