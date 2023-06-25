import React from "react";
import '../css/cardskill.css'

export const Cardskill = (props) => {
    return(
        <div className="cardimage">
            <a href={props.certificate.url} target="_blank" rel = "noreferrer">
                <img src={props.certificate.img} className="card-img-top" 
                    alt={props.certificate.name}/>
                <div className="texttitle">{props.certificate.name}</div>
            </a>
        </div>
    )
}