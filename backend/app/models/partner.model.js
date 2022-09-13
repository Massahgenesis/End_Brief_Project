const mongoose = require ("mongoose");

module.exports = mongoose =>{
    const Partners = mongoose.model(
        "partners",
        mongoose.Schema(
            {
            categorie: String,
            statut: String,
            lastName: String,
            firstName: String,
            identity: String,
            gender: String,
            domain: String,
            title: String,
            situation: String,
            experience: Boolean,
            country: String,
            town: String,
            code: Boolean,
            number: Boolean,
            email: String,
            reasons: String,
            },
            {timesTamps: true}
        )
    );
    return Partners;
};