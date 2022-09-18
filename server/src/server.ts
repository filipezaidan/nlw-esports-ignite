import express from "express";

const app = express()

app.get("/ads", (req,res) => {
    res.json([
        {id: "1", name: "Anuncio 1", date: new Date()},
        {id: "2", name: "Anuncio 2", date: new Date()},
        {id: "3", name: "Anuncio 3", date: new Date()},
    ])
})

app.listen(3333)