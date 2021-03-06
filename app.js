require('dotenv').config

const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();

const locationRouter = require('./routes/location');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))

app.use(fileUpload({
    createParentPath: true
}));

app.use('/', locationRouter);

module.exports = app;

