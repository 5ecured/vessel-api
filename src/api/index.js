import axios from 'axios'

const backendAPI = 'http://localhost:5000/api/data'

export const fetchAPI = async () => {
    try {
        const response = await axios.get('/api/fetchData')
        return response.data.data
    } catch (error) {
        console.error('Frontend fetchAPI error:', error.message);
        return null;
    }
}