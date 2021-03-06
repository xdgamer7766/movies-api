const express = require("express")
const req = require("express/lib/request")

const router = express.Router()

const films = [
    {"name" : "The wizard of Oz", "releaseDate" : 1939, "rating" : 98},
    {"name" : "The Jungle book", "releaseDate" : 2016, "rating" : 94},
    {"name" : "The lord of the rings: The two towers", "releaseDate" : 2002, "rating" : 95}
]

router.get("",(req,res) => {
    res.json(films[Math.floor(Math.random() * films.length)])
})

router.get("/all",(req,res) => {
    res.json(films)
    console.log(req.body.ertek)
})

router.get("/add",(req,res) => {
    films.push({name : req.body.name,releaseDate : parseInt(req.body.releaseDate), rating : parseInt(req.body.rating)})
    res.json(films)
})

module.exports = router