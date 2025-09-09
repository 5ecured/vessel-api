// api/fetchData.js
import axios from 'axios';

export default async function handler(req, res) {
    try {
        const url = `${process.env.API_KEY}`;

        const response = await axios.get(url);

        // Return the JSON back to the frontend
        return res.status(200).json({ data: response.data });
    } catch (error) {
        console.error('Error fetching external API:', error.message);
        return res.status(500).json({ error: 'Failed to fetch external API' });
    }
}
