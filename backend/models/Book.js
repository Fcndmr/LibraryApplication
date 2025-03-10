const mongoose = require("mongoose");

const BookSchema = mongoose.Schema(
    {
        title : { type : String, required : true, unique : true , trim : true},
        author : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Author"
        },
        publisher : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Publisher"
        },
        category : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category"
        },
        pageCount : { type : Number },
        img : { type : String, trim : true },
        publishedYear : { type : Number }
    },
    {
        timestamps : true
    }
);

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;