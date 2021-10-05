import axios from 'axios'

const BASE_URL = 'http://localhost:5001'
export default async function getAllAddresses() {
    return await axios.get(`${BASE_URL}/addresses`).then(res => res.data)
}