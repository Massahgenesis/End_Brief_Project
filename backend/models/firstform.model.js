const mongoose = require('mongoose');

 const firstformSchema = new mongoose.Schema({
    categorie:{type:String},
        statut:{type:String},
        lastName:{type:String},
        fisrtName:{type:String},
        identity:{type:String},
        gender:{type:String},
        domain:{type:String},
        title: {type:String},
        Situation:{type:String},
        experience:{type:Number},
        country:{type:String},
        town:{type:String},
        code: {type:Number},
        number:{type:Number},
        email:{type:String},
        reasons:{type:String},
        agree:{type:String}
 });

  module.exports =mongoose.model("user",firstformSchema);