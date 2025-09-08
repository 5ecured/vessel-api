import axios from 'axios'

const backendAPI = 'http://localhost:5000/api/data'

export const fetchAPI = async () => {
    try {
        const response = await axios.get(backendAPI)
        return response.data.data
    } catch (error) {
        console.log(error)
    }
}