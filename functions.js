require('dotenv').config();
const fetch = require('cross-fetch');

const url = 'http://api.weatherapi.com/v1/current.json'
const apiKey = process.env.WEATHER_KEY

exports.getWeather = async (req, res) => {
    const location = req.body.location
    const fetchWeather = await fetch(`${url}?key=${apiKey}&q=${location}`)
    const apiResponse = await fetchWeather.json()
    res.send(apiResponse)
}



