require('dotenv').config

const express = require('express');

const app = express();

const locationRouter = require('./routes/location');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', locationRouter);

module.exports = app;

