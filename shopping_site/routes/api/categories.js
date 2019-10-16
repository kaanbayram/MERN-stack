const express = require('express');
const router = express.Router();

const Categori = require('../../models/Categori');

router.post('/categories',(req, res) => {
    const newCategori = new Categori({
        name: req.body.name
    });
    newCategori.save().then( categori => res.json(categori));
});


router.get('/', (req, res) => {
    Categori.find().then(categori => res.json(categori));
});

module.exports = router;