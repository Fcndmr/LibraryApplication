const mongoose = require("mongoose");

const PublisherSchema = mongoose.Schema(
    {
        name : { type : String, required : true, trim : true},
        
    },
    {
        timestamps : true
    }
);

const Publisher = mongoose.model("Publisher", PublisherSchema);

module.exports = Publisher;