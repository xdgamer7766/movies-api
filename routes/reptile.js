const express = require("express")

const router = express.Router()


router.get('/snake',(req, res) =>{
    res.json({"name": "snek", "age" : 4})
})

router.get('/bearded-dragon',(req, res) =>{
    res.json({"name": "beardo", "age" : 6})
})

router.get('/turtle',(req, res) =>{
    res.json({"name" : "shelly", "age" : 99})
})

module.exports = router