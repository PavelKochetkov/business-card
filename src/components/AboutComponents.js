import React from 'react';
import '../css/resume.css';

export const AboutComponent = (props) => {
    return (
        <div className="resume">
            <div className="info">
                <div className="img">
                    <img src={props.about.img} alt="" />
                </div>
                <div className="description">{props.about.description}</div>
            </div>
        </div>
    );
};
