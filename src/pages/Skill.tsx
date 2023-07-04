import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Cardskill } from '../components/Cardskill';
import { baseUrl } from '../config';
import { Loader } from '../components/Loader';
import { PageTitle } from '../components/PageTitle';
import { IDataSkill } from '../models/IDataSkill';

export const Skill = () => {
    const [certificatesJsTs, setCertificatesJsTs] = useState<IDataSkill[]>([]);
    const [certificatesReact, setCertificatesReact] = useState<IDataSkill[]>(
        []
    );
    const [otherСertificates, setOtherСertificates] = useState<IDataSkill[]>(
        []
    );
    const [loading, setLoading] = useState<boolean>(false);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const resCertificatesJsTs = await axios.get<IDataSkill[]>(
                `${baseUrl}certificates.json`
            );
            const resCertificatesReact = await axios.get<IDataSkill[]>(
                `${baseUrl}react.json`
            );
            const resOtherCertificates = await axios.get<IDataSkill[]>(
                `${baseUrl}othercertificates.json`
            );
            setCertificatesJsTs(resCertificatesJsTs.data);
            setCertificatesReact(resCertificatesReact.data);
            setOtherСertificates(resOtherCertificates.data);
            setLoading(false);
        };
        fetchData();
    }, []);
    return (
        <React.Fragment>
            <PageTitle title={'Навыки'} />
            {loading && <Loader />}
            <div className="titleProgLang">Языки программирования</div>
            <div className="proglang">
                {certificatesJsTs.map((certificate) => (
                    <Cardskill certificate={certificate} />
                ))}
            </div>
            <div className="titleProgLang">Библиотеки</div>
            <div className="library">
                {certificatesReact.map((certificate) => (
                    <Cardskill certificate={certificate} />
                ))}
            </div>
            <div className="titleProgLang">Прочие сертификаты</div>
            <div className="other">
                {otherСertificates.map((certificate) => (
                    <Cardskill certificate={certificate} />
                ))}
            </div>
        </React.Fragment>
    );
};
