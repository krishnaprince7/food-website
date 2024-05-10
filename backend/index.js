const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const EmployMOdles=require("./modles/Employee")

const app = express()

app.use(express.json())

app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/empolyee");

app.post("/register",(req,res)=>{
    EmployMOdles.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))

})

app.listen(3001,()=>{
    console.log("server is runing")
})