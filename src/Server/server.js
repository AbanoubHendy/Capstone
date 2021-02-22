const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();
projectData ={};

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('src/Client'))

