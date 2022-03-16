const express = require("express")

const router = express.Router()


router.get('/budgie',(req, res) =>{
    res.send("I am gonna be honest i dont know what that is")
})

router.get('/owl',(req, res) =>{
    res.send("looking around")
})


module.exports = router