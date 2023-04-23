const express = require("express");

require("../db/conn");

const User = require("../db/models/userSchema");
const Result = require("../db/models/resultSchema");

const router = express.Router();

router.get("/", (req,res) => {
    res.render("index");
});

router.get("/login", (req,res) => {
    res.render("login");
});

router.get("/instructions" , (req,res) => {
    res.render("instructions")
})

router.get("/game", (req,res) => {
    res.render("game");
});

router.get("/score", (req,res) => {
    res.render("score");
});

router.get("/clues", (req,res) => {
    res.render("clues");
});

router.get("/result", (req,res) => {
    
    Result.find({}).then(function(users){
        res.render("result", {
            usersList : users
        })
    });
    
});

router.get("/table", (req,res) => {
    
    User.find({}).then(function(users){
        res.render("table", {
            usersList : users
        })
    });
    
});


router.post("/login" , async (req,res) => {

    const {email , password} = req.body;

    if(!email || !password){
        return res.status(422).json({error : "Please fill all the fields!"});
    };

    try{

        const userData = new User(req.body);
        await userData.save();
        res.status(201).render("instructions");

    }catch(err){
        console.log(err);
    };

});

router.post("/score", async(req,res) => {
    
    const {name , score} = req.body;

    if(!name || !score){
        return res.status(422).json({error : "Please fill all the fields!"});
    };

    try{
       
        const scoreData = new Result(req.body);
        await scoreData.save();
        res.status(201).render("score");
        
    }catch(err){
        console.log(err);
    };

});


module.exports = router;