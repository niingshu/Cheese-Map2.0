//basic server code -> everything in here runs nodejs code
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

const PORT = 5000;

//connect with the mongodb 
mongoose.connect("mongodb://127.0.0.1:27017/cheeses")
    .then(() => console.log("MongoDB connected successfully"))
    .catch(err => console.log("MongoDB connected failed", err));

//define a basic GET route
app.get('/api/cheeses', (req, res) => {
    const cheeses = require('./data/cheeses.json');

    res.json(cheeses); //response
});

//start the server 
app.listen(PORT, () => {
    console.log('Server running on port 5000');
});
