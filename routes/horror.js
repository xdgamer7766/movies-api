const express = require("express")

const router = express.Router()

const films = [
    {"name" : "American psycho", "releaseDate" : 2001, "rating" : 90 },
    {"name" : "A nigthmare on Elm street", "releaseDate" : 1987, "rating" : 72},
    {"name" : "A quite place", "releaseDate" : 2018, "rating" : 96}
]

router.get("",(req,res) => {
    res.json(films[Math.floor(Math.random() * films.length)])
})

router.get("/all",(req,res) => {
    res.json(films)
})

module.exports = router