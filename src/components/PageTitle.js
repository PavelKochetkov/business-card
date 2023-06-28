import React from "react";
import '../css/pagetitle.css'

export const PageTitle = (props) => {
    return (
        <div className="pagetitle">{props.title}</div>
    )
}