const express = require('express');
const router = express.Router();
const Object = require('../models/Object');
const mongoose = require('mongoose');

router.get('/', (req, res) => {
    const {body} = req.body;
})

module.exports = router;