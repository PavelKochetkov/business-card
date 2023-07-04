import React from 'react';
import '../css/sendmessage.css';
import { IDataContacts } from '../models/IDataContacts';

interface DataPropsContacts {
    contact: IDataContacts
}

export const Sendmessage = (props: DataPropsContacts) => {
    return (
        <React.Fragment>
            <div className="media">
                <a href={props.contact.url} target="_blank" rel="noreferrer">
                    <div className="title_sl">{props.contact.title}</div>
                    <img src={props.contact.img} alt={props.contact.name} />
                </a>
            </div>
        </React.Fragment>
    );
};
