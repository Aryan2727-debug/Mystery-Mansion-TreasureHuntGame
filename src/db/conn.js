const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({path : '../config.env'});

const DB = process.env.DATABASE;

mongoose.set("strictQuery" , true);

mongoose.connect(DB, {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
    console.log("DB Connected");
}).catch((err)=> console.log(err));
