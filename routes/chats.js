
var express = require("express");
var router = express.Router();
var Chat = require('../models/db').Chat

router.post("/", function (req, res, _next) {
 // destructuring used here, it's the same as req.body.message
 // Google the concept, it's convenient!
 const { message } = req.body;
 Chat.create({
    message
})
 res.sendStatus(200);
});

router.get('/', async function(req,res,_next) {
    const chats = await Chat.findAll()
    res.json({messages: chats})
 })
 

module.exports = router;
