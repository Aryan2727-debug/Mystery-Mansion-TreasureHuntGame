const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true,
        validate(val){
            if(!validator.isEmail(val)){
                throw new Error("The Email you entered is invalid!");
            }
        }
    },
    password : {
        type : String,
        required : true
    }
});

const User = new mongoose.model("USER", userSchema);

module.exports = User;