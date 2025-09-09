import axios from 'axios'

const backendAPI = 'https://vessel-api-backend.onrender.com/api/data'

export const fetchAPI = async () => {
    try {
        const response = await axios.get(backendAPI)
        return response.data.data
    } catch (error) {
        console.log(error)
    }
}