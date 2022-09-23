const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

//  parse request of content-type -app/json
app.use(bodyParser.json());

//parse request of content-type -app/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//simple route
app.get("/", (req, res) => {
    res.json({ message: "bienvenue sur notre site" });
});

const PORT = process.env.PORT || 8080

app.listen(PORT, console.log(`server started on ${PORT}`));

//conneccting database
const db = require("./app/models");


db.mongoose
    .connect(process.env.URL)
    .then(() => {
        console.log("connecté à la base de donées !");
    })
    .catch(err => {
        console.log("Ne peut pas se connecter a la base de données !", err);
        process.exit();
    });