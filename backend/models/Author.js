const mongoose = require("mongoose");

const AuthorSchema = mongoose.Schema(
    {
        name : { type : String, required : true, trim : true},
        
    },
    {
        timestamps : true
    }
);

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;
