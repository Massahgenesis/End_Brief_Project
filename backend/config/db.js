const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://"+process.env.MONGODB_URL+"/mansah-backend",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=> console.log('connect to mongoDb'))
.catch((err)=>
    console.log('fail to connect to MongoDb ', err)
)