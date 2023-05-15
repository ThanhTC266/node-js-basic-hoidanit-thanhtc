// const express = require('express')
// const path = require('path')
import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from './route/web';
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
console.log('>>> check port: ', port)

// setup view engine
configViewEngine(app);

//init web browse
initWebRoute(app)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})