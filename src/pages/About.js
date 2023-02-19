import React, {useState, useEffect} from 'react'
import '../css/resume.css'
import { baseUrl } from '../config'
import axios from 'axios'
// import { Languges } from '../components/Languges'
import {Tech} from '../components/Tech'
import { Qualities } from '../components/Qualities'
import { Hobby } from '../components/Hooby'
import { Quests } from '../components/Quests'
import { Loader } from '../components/Loader'

export const About = () => {
    // const [languges, setLanguges] = useState([])
    const [tech, setTech] = useState([])
    const [qualities, setQualities] = useState([])
    const [hobbies, setHobbies] = useState([])
    const [quests, setQuests] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const resTech = await axios.get(`${baseUrl}tech.json`)
            setTech(resTech.data)
            const resQualities = await axios.get(`${baseUrl}userQualities.json`)
            setQualities(resQualities.data)
            const resHobby = await axios.get(`${baseUrl}userHobby.json`)
            setHobbies(resHobby.data)
            const resQuest = await axios.get(`${baseUrl}questionnaire.json`)
            setQuests(resQuest.data)
            setLoading(false)
        }
        fetchData()
    }, [])
        return (
            <React.Fragment>
                <div className='titleAbout'>Обо мне</div>
                {loading && <Loader/>}
                <div className='resume'>
                    {tech.map(skill => <Tech skill={skill}/>)}
                    {qualities.map(qualitie => <Qualities qualitie={qualitie}/>)}
                    {hobbies.map(hobby => <Hobby hobby={hobby}/>)}
                    {quests.map(quest => <Quests quest={quest}/>)}
                </div>
            </React.Fragment>
            
        )
}