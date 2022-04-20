require('dotenv').config();
const express = require('express');
const cors = require('cors');

const {getWeather} = require('./functions');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.post('/', getWeather)

app.listen(port, () => {
    console.log(`Running on port ${port}`);
})

