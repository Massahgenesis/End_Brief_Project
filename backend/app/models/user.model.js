const mongoose = require ("mongoose");

module.exports = mongoose =>{
    const Users = mongoose.model(
        "user",
        mongoose.Schema(
            {
                name:String,
                firstName: String,
                age: Boolean,
                phone: Boolean,
                mail:String,
                adress:String,
                job:String,
                situation:String,
                region:String,
                town:String,
                message:String
            },
            {timesTamps: true}
        )
    );
    return Users;
};