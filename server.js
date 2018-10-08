require('dotenv').config()

//DEPENDENCIES
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//CONNECT MONGODB
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
const connection = mongoose.connection
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully')
})
connection.on('error', err => {
  console.log(`Mongoose default connection error: ${err}`)
})

//INSTANTIATE EXPRESS & MIDDLEWARE
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + '/client/build/'));

//ROUTES
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/client/build/index.html')
})

const usersController = require('./routes/usersController')
const artworksController = require('./routes/artworksController')

app.use('/api/users', usersController)
app.use('/api/users/:userId/artworks', artworksController)


module.exports = app;
