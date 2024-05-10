const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const EmployMOdles=require("./modles/Employee")

const app = express()




app.use(cors(
    {
        origin:["https://krishna-food-website.vercel.app/"],
        methods:["POST","GET"],
        credentials:true
    }
))

app.use(express.json())
mongoose.connect("mongodb+srv://princekrishna5707:krishna123@cluster0.hiikio8.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0");

app.get("/",(req,res)=>{
    res.json("Hello");
})

app.post("/register",(req,res)=>{
    EmployMOdles.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))

})

app.listen(3001,()=>{
    console.log("server is runing")
})
