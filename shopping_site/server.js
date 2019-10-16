const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('config');
//const bodyParser = require('body-parser');

const items = require('./routes/api/items');
const categories = require('./routes/api/categories');
const users = require('./routes/api/users');
const auth = require('./routes/api/auth');

const app = express();

app.use(cors());
//body parser middleware

app.use(express.json());

//DB config

const db = config.get('mongoURI');

//Connect to Mongo

mongoose
    .connect(db, {useNewUrlParser:true, useCreateIndex: true})
    .then(() => console.log("mongodb Connected..."))
    .catch(err => console.log(err));



//User routes

app.use('/api/items', items);
app.use('/api/categories', categories);
app.use('/api/users', users);
app.use('/api/auth', auth);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server started on port '+ port));

//,{useNewUrlParser:true}