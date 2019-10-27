require('dotenv').config

const express = require('express');
const router = express.Router();
const Object = require('../models/Object');
const mongoose = require('mongoose');

router.get('/', (req, res) => {
    const {body} = req.body;
})

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