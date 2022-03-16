const express = require("express")

const router = express.Router()

router.get("/frog",(req,res) => {
    res.send("brekeke")
})

router.get("/salamander",(req,res) => {
    res.send("fiery geek")
})

module.exports = router