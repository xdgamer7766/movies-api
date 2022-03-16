const express = require("express")

const router = express.Router()


router.get('/snake',(req, res) =>{
    res.send("snek")
})

router.get('/bearded-dragon',(req, res) =>{
    res.send("dragon with a beard")
})

router.get('/turtle',(req, res) =>{
    res.send("just an empty shell")
})

module.exports = router