// const mongoose = require ("mongoose");

module.exports = mongoose =>{
    const Tutorial = mongoose.model(
        "tutorial",
        mongoose.Schema(
            {


                title: String,
                description: String,
                published:  Boolean
            },
            {timesTamps: true}
        )
    );
    return Tutorial;
};