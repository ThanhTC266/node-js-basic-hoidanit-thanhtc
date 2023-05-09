// const express = require('express')
// const path = require('path')
import express from "express";
import configViewEngine from "./configs/viewEngine";

const app = express();
const port = 3000

configViewEngine(app);

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/about', (req, res) => {
    res.send(`I'm Thanh`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})