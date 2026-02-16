const mongoose = require('mongoose');

//define schema structure for data
const cheesesSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true //cannot but null or undefined
    },
    region: {
        type: String,
        required: true, //cannot but null or undefined
        minlength: 1
    },
    country: {
        type: String,
        required: true, //cannot but null or undefined
    },
    location: {
        type: {
            type: String, //'location.type' must be 'Point'
            enum: ['Point'],
            default: 'Point',
            required: true
        }, 
        coordinates: {
            type: [Number], //array of numbers: [longitude, latitude]
            required: true
        }
    },
    rating: {
        type: Number,
        max: 5
    },
    fun: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    url: { //storing a reference url as string
        type: String,
        required: true
    },
    img: { //storing a path to image 
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now, //sets a default value
        immutable: true //value cannot be changed after initial save
    }
}); 
//the collection name is cheese_map -> whenever need something from db -> call cheese_map.collection()
//the db name is cheeses (in the string_connection)

//a model is a class with which you can construct documents
const cheeses = mongoose.model ('cheeses', cheesesSchema);

module.exports = cheeses;