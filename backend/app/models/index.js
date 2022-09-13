const dbConfig = require ("../config-db/dbconfig");

const mongoose = require ("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.Subscriber = require("./partner.model")(mongoose);
db.Users = require ("./user.model")(mongoose);

module.exports = db;