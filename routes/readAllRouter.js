require('dotenv').config();
const express = require('express');
const router = express.Router();
const DBschema = require('../DBschema/apiDbSchema');


//get all 
router.get('/', async (req, res) => {
    try{
        const sensors = await DBschema.find();
        res.json(sensors);
    } 
    catch (err) {
        res.status({message: err.message})
    }
    //http://localhost:3000
});

module.exports = router