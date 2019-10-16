const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const advertschema  = new Schema({
    advertname:{
        type: String,
        required: true,
        min: 3,
        max: 15
    },
    author: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        trim: true,
    },
    document:{
        type: String,
        required: true
    },
    cost:{
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    categories: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        trim: true,
    },
});


module.exports = Item = mongoose.model('advert', advertschema);