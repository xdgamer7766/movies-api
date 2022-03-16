const express = require("express")

const router = express.Router()

router.get("/frog",(req,res) => {
    res.json({"name" : "fromg", "age" : 1})
})

router.get("/salamander",(req,res) => {
    res.json({"name" : "fire geek", "age" : 3})
})

module.exports = router