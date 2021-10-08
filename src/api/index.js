import axios from 'axios'

const BASE_URL = 'http://localhost:5001'

export async function getAllAddresses() {
    return await axios.get(`${BASE_URL}/addresses`).then(res => res.data)
}


export async function getAllTags() {
    return await axios.get(`${BASE_URL}/tags`).then(res => res.data)
}

export async function createTag(tag) {
    return await axios.post(`${BASE_URL}/tags`, {tag}).then(res => res.data)
}


export async function postProperty(values){
    await axios.post(`${BASE_URL}/property`, {property: values })
}