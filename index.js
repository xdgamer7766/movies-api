const express = require("express")
const reptiles = require("./routes/reptile.js")
const birds = require("./routes/bird.js")
const amphibians = require("./routes/amphibian.js")

const app = express()

app.use("/reptiles",reptiles)
app.use("/birds",birds)
app.use("/amphibians",amphibians)
app.get("/api",(req,res) => {
    res.send("api version: 1.0.0")
})


app.listen(3000)