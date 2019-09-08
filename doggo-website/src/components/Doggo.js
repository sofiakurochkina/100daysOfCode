import React from "react";

function Doggo(props){
    return (
    <div className="card">
    <h3>{props.name}</h3>
    <img className="picture" src={props.imgUrl} alt="Doggy"/>
    </div>
    )
}

export default Doggo;