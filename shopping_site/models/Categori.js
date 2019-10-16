const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoriesschema = new Schema({
    name:{
        type: String,
        required: true,
        min: 3,
        max: 15
    },
});

module.exports = Categori = mongoose.model('categori', categoriesschema);