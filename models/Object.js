const mongoose = require('mongoose');

var Object = new mongoose.Schema({
    creatorName: String,
    objectFileLocation: String,
    longitude: Number,
    latitude: Number,
    scale: Number,
    rotation: Number
});

module.exports = mongoose.model('Object', Object);