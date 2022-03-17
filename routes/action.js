const express = require("express")

const router = express.router()

const films = [
    {"name" : "Batman", "releaseDate" : 2022, "rating" : 84},
    {"name" : "The Adam-project", "releaseDate" : 2022, "rating" : 68},
    {"name" : "Free guy", "releaseDate" : 2021, "rating" : 72}
]

module.exports(router)