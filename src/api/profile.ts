import axios from "axios";
import { IDataAbout, IDataContacts, IDataSkill } from "../models/IDataProfile";
import { TargetJson } from "../models/TargetJson";


const baseURL: string = '/business-card/'

export const getProfileContacts = async () => {
    return axios.get<IDataContacts[]>(`${baseURL}${TargetJson.contacts}`)
}

export const getProfileAbout = async () => {
    return axios.get<IDataAbout[]>(`${baseURL}${TargetJson.about}`)
}

export const getProfileSkillProgrammingLanguages = async () => {
    return axios.get<IDataSkill[]>(`${baseURL}${TargetJson.language}`) 
}

export const getProfileSkillLibraries = async () => {
    return axios.get<IDataSkill[]>(`${baseURL}${TargetJson.libraries}`) 
}

export const getProfileOtherSkill = async () => {
    return axios.get<IDataSkill[]>(`${baseURL}${TargetJson.other}`) 
}