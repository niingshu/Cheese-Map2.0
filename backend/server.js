//basic server code 
const express = require('express');
const cors = require('cors');

const app = express();

const PORT = 5000;

//define a basic GET route
app.get('/api/cheeses', (req, res) => {
    const cheeses = require('./data/cheeses.json');

    res.json(cheeses); //response
});

//start the server 
app.listen(PORT, () => {
    console.log('Server running on port 5000');
});
