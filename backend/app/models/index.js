const dbConfig = require ("../config-db/dbconfig");

const mongoose = require ("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
// db.Partners = require("./partner.model")(mongoose);
db.tutorials = require ("./user.model.js")(mongoose);

module.exports = db;