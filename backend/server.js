require('dotenv').config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = 5000;

app.use(cors());

const API = process.env.API_KEY

app.get("/api/data", async (req, res) => {
    try {
        const response = await axios.get(API);
        res.json(response.data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Failed to fetch data" });
    }
});

app.listen(PORT, () => {
    console.log(`✅ Proxy server running at http://localhost:${PORT}`);
});