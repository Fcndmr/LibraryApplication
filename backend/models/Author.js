const mongoose = require("mongoose");

const AuthorSchema = mongoose.Schema(
    {
        name : { type : String, required : true, unique : true , trim : true },
        birthYear : { type : Number },
        nationality : { type : String, trim : true },
        img : { type : String, trim : true }
    },
    {
        timestamps : true
    }
);

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;
