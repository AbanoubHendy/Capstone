const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const app = express()
projectData ={};

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'))
app.get('/', function(req , res) {
    res.sendFile('./dist/index.html')
})

app.listen(7000 , function() {
    console.log('Your App Running on Port 7000')
})

