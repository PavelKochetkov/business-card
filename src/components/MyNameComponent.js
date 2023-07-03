import React from 'react';
import '../css/myname.css';

export const MyNameComponent = (props) => {
    return (
        <div className="myname">
            <div className="photo">
                <img src={props.myphoto} alt="" />
            </div>
            <div className="nameage">
                <div className="name">{props.name}</div>
                <div className="age">{props.age}</div>
            </div>
        </div>
    );
};
