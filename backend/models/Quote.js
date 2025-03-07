const mongoose = require("mongoose");

const QuoteSchema = mongoose.Schema(
    {
        text : { type : String, required : true, trim : true},
        author : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Author"
        },
        book : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book"
        }
    },
    {
        timestamps : true
    }
);

const Quote = mongoose.model("Quote", QuoteSchema);

module.exports = Quote;