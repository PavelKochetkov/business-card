import React from 'react';
import '../css/cardskill.css';
import { IDataSkill } from '../models/IDataSkill';

interface DataPropsSkill {
    certificate: IDataSkill;
}

export const Cardskill = (props: DataPropsSkill) => {
    return (
        <div className="cardimage">
            <a href={props.certificate.url} target="_blank" rel="noreferrer">
                <img src={props.certificate.img} alt={props.certificate.name} />
                <div className="texttitle">{props.certificate.name}</div>
            </a>
        </div>
    );
};
