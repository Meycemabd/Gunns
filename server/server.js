// Server init 
import express from 'express';
import dotenv from 'dotenv'

//const express = require("express");
const app = express();
//require('dotenv').config()
dotenv.config()
const PORT = process.env.PORT || 2000;


app.get('/', (req, res) => {
    res.send('Sfectorian!');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});

