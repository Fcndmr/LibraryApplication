const mongoose = require("mongoose");

const PublisherSchema = mongoose.Schema(
    {
        name : { type : String, required : true, unique : true, trim : true },
        img : { type : String, trim : true },
        website : { type : String, trim : true }
    },
    {
        timestamps : true
    }
);

const Publisher = mongoose.model("Publisher", PublisherSchema);

module.exports = Publisher;