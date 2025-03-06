const mongoose = require("mongoose");

const QuoteSchema = mongoose.Schema(
    {
        name : { type : String, required : true, trim : true},
        
    },
    {
        timestamps : true
    }
);

const Quote = mongoose.model("Quote", QuoteSchema);

module.exports = Quote;