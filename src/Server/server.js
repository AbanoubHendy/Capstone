const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors');
const webpack = require('webpack');
const app = express()
const ApiKey1 = process.env.API_KEYGEO;
console.log(`Your API key is ${process.env.API_KEYGEO}`);

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

// app.post('/AddData' , function(req , res){
//     EntryData={
//         lat: req.body.lat,
//         lon: req.body.lon,
//         country: req.body.country
//     }
//     projectData=EntryData;
// })

app.post('/add', async function(req, res) {
    const geo_BaseUrl ='http://api.geonames.org/searchJSON?';
    console.log('req.body -------> ', req.body)
    const {countryInput} = req.body;
    //URL meaning cloud API
    const URL = `${geo_BaseUrl}q=${countryInput}&maxRows=10&username=${ApiKey1}`;
    const response = await fetch(URL)
    try{
    const data = await response.json()
    projectData = {
        lat:data.lat,
        lon:data.lng,
        country:data.city
       }
    console.log('data ===> ', data)
    res.send(data)
    }catch(error){
        console.log(error)
    }
})