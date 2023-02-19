import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Cardskill } from '../components/Cardskill'
import { baseUrl } from '../config'
import { Loader } from '../components/Loader'

export const Skill = () => {
  const [certificatesJsTs, setCertificatesJsTs] = useState([])
  const [certificatesReact, setCertificatesReact] = useState([])
  const [otherСertificates, setOtherСertificates] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect (() => {
    const fetchData = async () => {
      setLoading(true)
      const resCertificatesJsTs = await axios.get(`${baseUrl}certificates.json`)
      const resCertificatesReact = await axios.get(`${baseUrl}react.json`)
      const resOtherCertificates = await axios.get(`${baseUrl}othercertificates.json`)
      setCertificatesJsTs(resCertificatesJsTs.data)
      setCertificatesReact(resCertificatesReact.data)
      setOtherСertificates(resOtherCertificates.data)
      setLoading(false)
    }
    fetchData()
  }, [])
  
  return (
    <React.Fragment>
      <div className='titleSkill'>Навыки</div>
      {loading && <Loader/>}
      <div className='titleProgLang'>Языки программирования</div>
      <div className = "cardskill mt-4">
        {certificatesJsTs.map(certificate => <Cardskill certificate={certificate}/>)}
      </div>
      <div className='titleProgLang'>Библиотеки</div>
      <div className = "cardskill mt-4">
        {certificatesReact.map(certificate => <Cardskill certificate={certificate}/>)}
      </div>
      <div className='titleProgLang'>Прочие сертификаты</div>
      <div className = "cardskill mt-4">
        {otherСertificates.map(certificate => <Cardskill certificate={certificate}/>)}
      </div>
    </React.Fragment>
  )     
}