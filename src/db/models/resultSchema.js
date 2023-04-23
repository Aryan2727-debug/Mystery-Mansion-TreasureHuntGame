const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    score : {
        type : Number,
        required : true
    }
});

const Result = new mongoose.model("RESULT", resultSchema);

module.exports = Result;