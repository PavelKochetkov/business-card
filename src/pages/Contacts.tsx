import React, { useState, useEffect } from 'react';
import { baseUrl } from '../config';
import { Sendmessage } from '../components/Sendmessage';
import { PageTitle } from '../components/PageTitle';
import { Loader } from '../components/Loader';
import axios from 'axios';
import { IDataContacts } from '../models/IDataContacts';

export const Contacts = () => {
    const [contacts, setContacts] = useState<IDataContacts[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const resContacts = await axios.get<IDataContacts[]>(
                `${baseUrl}contacts.json`
            );
            setContacts(resContacts.data);
            setLoading(false);
        };
        fetchData();
    }, []);
    return (
        <React.Fragment>
            <PageTitle title={'Контакты'} />
            {loading && <Loader />}
            <div className="sendmessage">
                {contacts.map((contact, index) => (
                    <Sendmessage key={index} contact={contact} />
                ))}
            </div>
        </React.Fragment>
    );
};
