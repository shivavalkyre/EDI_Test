// Node Package
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



const version = 'v1/';
// const apiRoute = require('./routes/api');
// const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const { app } = require("./src/config/app")



app.use(cookieParser());
const PORT = process.env.PORT || process.env.PORT;
app.listen(PORT, console.log(`Server started on port ${PORT}`))