const mongoose = require('mongoose');
const secondformSchema= new mongoose.Schema({
       
       name:{type:String},
       fistName:{type:String},
       age:{type:Number},
       phone:{type:Number},
       mail:{type:String},
       adress:{type:String},
       job:{type:String},
       situation:{type:String},
       region:{type:String},
       town:{type:String},
       message:{type:String},
});

module.exports= mongoose.model("member",secondformSchema);