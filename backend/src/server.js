// import express from "express"
const express = require("express")
const env = require("./lib/env")

const app = express()

app.get("/", (req, res)=>{
    res.status(200).json({msg: "Success from API"})
})

const Port = env.PORT
app.listen(Port, ()=>{console.log(`Server.js is running on ${Port}`)})