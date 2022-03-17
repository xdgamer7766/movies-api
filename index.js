const express = require("express")


const app = express()

app.get("/api",(req,res) => {
    res.send("api version: 1.0.0")
})


app.listen(3000)