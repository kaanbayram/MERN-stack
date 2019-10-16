const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Userschema = new Schema({
    username:{
        type: String,
        required: true,
        min: 3,
        max: 20,
        trim: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true,
        min: 3,
        max: 20,
    },
    surname:{
        type: String,
        required: true,
        min: 3,
        max: 20,
    },
    registerdate: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model('user', Userschema);