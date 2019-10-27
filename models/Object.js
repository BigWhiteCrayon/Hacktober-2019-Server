const mongoose = require('mongoose');

var Object = new mongoose.Schema({
    creatorName: String,
    objectFileLocation: String,
    longitude: Number,
    latitude: Number
});

module.exports = mongoose.model('Object', Object);