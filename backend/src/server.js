// import express from "express"
const express = require("express")
const env = require("./lib/env")
// const { env } = require("process")
// import {env} from "./lib/env"
// const env = process.env
const path = require("path")

const app = express()
const __dirnamex = path.resolve()
const {PORT, NODE_ENV} = process.env

app.get("/health", (req, res)=>{
    res.status(200).json({msg: "Success from API"})
})

if(NODE_ENV === "production"){
    const dirPathz = path.join(__dirnamex, "../frontend/dist")
    app.use(express.static(dirPathz))

    app.get("/{*any}", (req, res)=>{
        res.sendFile(path.join(__dirnamex, "../frontend", "dist", "index.html"))
    })
}

app.listen(PORT, ()=>{console.log(`Server.js is running on ${PORT}`)})