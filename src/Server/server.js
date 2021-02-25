const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors');
const webpack = require('webpack');
const app = express()
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

app.post('/data' , function(req , res){
    EntryData={
        
    }
})
