import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Cardskill } from '../components/Cardskill'
import { baseUrl } from '../config'
import { Loader } from '../components/Loader'

export const Skill = () => {
  const [certificates, setCertificates] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect (() => {
    const fetchData = async () => {
      setLoading(true)
      const response = await axios.get(`${baseUrl}certificates.json`)
      setCertificates(response.data)
      setLoading(false)
    }
    fetchData()
  }, [])
  
  return (
    <React.Fragment>
      <div className='titleSkill'>Навыки</div>
      <div className = "cardskill mt-4">
        {loading && <Loader/>}
        {certificates.map(certificate => <Cardskill certificate={certificate}/>)}
      </div>
    </React.Fragment>
  )     
}