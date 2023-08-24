import axios from "axios";
import { IDataAbout, IDataContacts, IDataSkill } from "../models/IDataProfile";

const baseURL: string = '/business-card/'

export const getProfileContacts = async () => {
    return axios.get<IDataContacts[]>(`${baseURL}contacts.json`)
}

export const getProfileAbout = async () => {
    return axios.get<IDataAbout[]>(`${baseURL}about.json`)
}

export const getProfileSkillProgrammingLanguages = async () => {
    return axios.get<IDataSkill[]>(`${baseURL}programminglanguages.json`) 
}

export const getProfileSkillLibraries = async () => {
    return axios.get<IDataSkill[]>(`${baseURL}libraries.json`) 
}

export const getProfileOtherSkill = async () => {
    return axios.get<IDataSkill[]>(`${baseURL}other.json`) 
}