const express = require("express")
const action = require("./routes/action.js")
const horror = require("./routes/horror.js")
const fantasy = require("./routes/fantasy.js")

const app = express()

app.get("/api",(req,res) => {
    res.send("api version: 1.0.0")
})
app.use("/action",action)
app.use("/horror",horror)
app.use("/fantasy",fantasy)

app.listen(3000)