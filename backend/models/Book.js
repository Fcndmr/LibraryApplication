const mongoose = require("mongoose");

const BookSchema = mongoose.Schema(
    {
        name : { type : String, required : true, trim : true},
        
    },
    {
        timestamps : true
    }
);

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;