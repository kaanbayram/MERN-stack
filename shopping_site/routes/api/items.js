const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');


const Item = require('../../models/Item');


// @route GET api/items
// @desc Get all items
// @access public 

router.post('/', auth,(req, res) => {
    const newItem = new Item({
        advertname:req.body.advertname,
        author:req.body.author,
        document:req.body.document,
        cost:req.body.cost,
        categories:req.body.categories
    });
    newItem.save().then(items => res.json(items));
});

router.get('/', (req, res) => {
    Item.find().then(items => res.json(items));
});

router.delete('/:id',auth,(req, res) => {
    Item.findById(req.params.id).then( item => item.remove().then(()=> res.json({success: true})));
    //Item.find().then( items => res.json(items));
});



module.exports = router;