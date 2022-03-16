const express = require("express")

const router = express.Router()


router.get('/budgie',(req, res) =>{
    res.json({"name" : "idk bird?", "age": 69})
})

router.get('/owl',(req, res) =>{
    res.json({"name" : "strange birb", "age" : 15})
})


module.exports = router