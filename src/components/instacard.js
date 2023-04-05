import React from "react";
import "./card.css"


export default function InstaCard({user}){
    return <section className="card">
        <img className="image" src={user.PostImage} alt="postimg"/>
    </section>
}