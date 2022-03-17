const express = require("express")

const router = express.Router()

const films = [
    {"name" : "Batman", "releaseDate" : 2022, "rating" : 84},
    {"name" : "The Adam-project", "releaseDate" : 2022, "rating" : 68},
    {"name" : "Free guy", "releaseDate" : 2021, "rating" : 72}
]

router.get("",(req,res) => {
    res.json(films[Math.floor(Math.random() * films.length)])
})

router.get("/all",(req,res) => {
    res.json(films)
})

router.get("/add",(req,res) => {
    films.push({"name" : req.name,"releaseDate" : parseInt(req.releaseDate), "rating" : parseInt(req.rating)})
    res.json(films)
})

module.exports = router