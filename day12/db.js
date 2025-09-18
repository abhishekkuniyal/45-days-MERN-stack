import express from "express"
import mongoose from  "mongoose"

const app = express();
const MONGO_URI = (`mongodb://127.0.0.1:27017/blogapp`)
const PORT = 5000;
mongoose.connect(MONGO_URI)

app.use(express.json())


const blogSchema = new mongoose.Schema({
title : String,
content: String,
author : String,
tags: String,
ppublished: { type: Boolean, default: true },
createdAt: { type: Date, default: Date.now }

})

const blogmodel = mongoose.model("blog",blogSchema)


app.post('/posts',async (req,res)=>{
    const {title,content,author,tags} = req.body;
    const newPosts = new blogmodel({
        title,
        content,
        author,
        tags
    })

    await newPosts.save();
    console.log("database started")
    console.log(newPosts)
    res.send("data added")
})

app.get('/posts',async (req,res)=>{
     res.send( await blogmodel.find())
})

app.listen(PORT,()=>{
    console.log("you started the server")
})