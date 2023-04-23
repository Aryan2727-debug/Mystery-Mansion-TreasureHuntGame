const express = require("express");
const path = require("path");
const hbs = require("hbs");
const ejs = require("ejs");
const dotenv = require("dotenv");

dotenv.config({path : '../config.env'});

require("./db/conn");
const User = require("./db/models/userSchema");

const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));

const templatePath = path.join(__dirname , "../templates/views");
const partialsPath = path.join(__dirname , "../templates/partials");
const staticPath = path.join(__dirname , "../public");

app.use(express.static(staticPath));
app.set("views" , templatePath);
app.set("view engine" , "ejs");

hbs.registerPartials(partialsPath);

app.use(require("./router/auth"));

app.get("/", (req,res) => {
    res.send("Home Page");
});

app.get("/login", (req,res) => {
    res.send("login Page");
});

app.get("/signup", (req,res) => {
    res.send("signup Page");
});

app.listen(port, () => {
    console.log(`App started at Port ${port}`);
});