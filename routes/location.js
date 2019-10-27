require('dotenv').config

const express = require('express');
const router = express.Router();
const Object = require('../models/Object');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL,  {useNewUrlParser: true});
const db = mongoose.connection;

/* GET Objects within ~.5 miles of current */
router.get('/:id', (req, res) => {
    const { longitude, latitude } = req.body;
    //should limit to objects within half a mile, kinda big but oh well
    Object.where('longitude').gte(longitude - .01).lte(longitude - .01)
    .where('latitude').gte(latitude - .01).lte(latitude - .01)
    .exec((err, object) => {
        if(err){return res.status(500).send(err)}
        res.status(200).send(object);
    });
})

/*PUT new Object */
router.put('/', (req, res) => {
    const newObject = new Object(req.body);
    newObject.save(err => {
        if(err) {return res.status(500).send(err)}
        res.status(200).send({message: `Succesfully added ${req.body.creatorName}'s Masterpiece}`})
    });
});

/*POST Model to be stored in public folder */
router.post('/model', async(req, res) =>{
    try{
        if(!req.files){return res.status(500).send({message: 'No File Uploaded'})};

        let model = req.files.model;

        model.mv('./public/' + model.name, (err) => {
            return res.status(500).send(err);
        });
        let path = 'http://localhost:' + process.env.PORT + '/' + model.name;
        res.status(200).send({ path: path});
    }
    catch (err) {
        res.status(500).send(err);
    }
})

module.exports = router;