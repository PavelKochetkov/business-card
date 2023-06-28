import React, {useState, useEffect} from 'react'
// import { baseUrl } from '../config'
// import axios from 'axios'
import { Loader } from '../components/Loader'
import { PageTitle } from '../components/PageTitle'

export const About = () => {
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
           
            setLoading(false)
        }
        fetchData()
    }, [])
    return (
        <React.Fragment>
            <PageTitle title={'Обо мне'}/>
            {loading && <Loader/>}
        </React.Fragment>
    )
}