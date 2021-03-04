const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors');
const webpack = require('webpack');
const fetch = require('node-fetch');
const app = express()
const ApiKey1 = process.env.API_KEYGEO;
console.log(`Your Geo Api key is ${process.env.API_KEYGEO}`);
const ApiKey2 = process.env.API_KEYWEATHER;
console.log(`Your Geo Api key is ${process.env.API_KEYWEATHER}`);

projectData ={};

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'))
app.get('/', function(req , res) {
    res.sendFile('./dist/index.html')
})
const port = 7000;
const server = app.listen(port , listening);
function listening() {
    console.log(`the server running on: ${port}`);
};

app.get('/getData' , function(req , res){
    res.send(projectData);
})


app.post('/Geoadd', async function(req, res) {
    const geo_BaseUrl ='http://api.geonames.org/searchJSON?';
    console.log('req.body -------> ', req.body)
    const { cityInput } = req.body;
    const GeoURL = `${geo_BaseUrl}q=${cityInput}&maxRows=10&username=+${ApiKey1}`;
    const response = await fetch(GeoURL)
    try{
    const data = await response.json()
    projectData = {
        lat:data.lat,
        lng:data.lng,
        countryName:data.countryName
    }
    console.log('data ===> ', data)
    res.send(data)
    }catch(error){
        console.log(error)
    }
})

app.post('/weatherAdd' , function(req , resp) {
    const weather_BaseUrl = 'https://api.weatherbit.io/v2.0/forecast/daily?';
    console.log('req.body -------> ', req.body)
    const { cityInput } = req.body;
    const weatherURL = `${weather_BaseUrl}city=${cityInput},NC&key=${ApiKey2}`;
    const response = await fetch(weatherURL)
    try{
        const weatherdata = await response.json()
        projectData = {
            city_name:weatherdata.city_name,
            temp:weatherdata.temp,
            icon:weatherdata.icon,
            description:weatherdata.description
        }
        console.log('data ===> ', weatherdata)
        resp.send(weatherdata)
    }catch(error){
        console.log(error)
    }
})