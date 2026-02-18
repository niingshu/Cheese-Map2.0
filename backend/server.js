//basic server code -> everything in here runs nodejs code
const express = require('express');
const cors = require('cors'); //imports the cors middleware package 
//enabling cross-origin resource sharing (allows backend api to accept requests from diff domain origins)
const mongoose = require('mongoose');

//import the model 
const Cheeses = require('./models/cheese.schema.js')

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

//connect with the mongodb 
mongoose.connect("mongodb://127.0.0.1:27017/cheeses") 
    .then(() => console.log("MongoDB connected successfully"))
    .catch(err => console.log("MongoDB connected failed", err));

//create route to fetch all cheeses from db 
//when frontend calls api/cheeses this function is ran
app.get('/api/cheeses', async (req, res) => { //express receiving the request from frontend
    try {
        //cheeses is the response from mongo (data stored) to get back to express
        const cheeses = await Cheeses.find({}) //use find() -> express calling mongodb 
            .then(cheese => { 
                res.status(200).json({
                    cheese, //send the data as json to frontend
                })
            });
        
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

//route to fetch a single cheese by id
app.get('/api/cheeses/:id', async (req, res) => {
    try {
        const cheese = await Cheeses.findById(req.params.id);
        if (!cheese) {
            return res.status(404).json({message: 'No Item found'});
        }
        res.status(200).json({item: cheese});
    } catch (err){
        console.error(err);
        res.status(500).json({message: 'Error on server'});
    }
});

//start the server 
app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
});