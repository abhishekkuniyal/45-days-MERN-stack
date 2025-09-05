const data = require('./data.json')
const express = require('express')
const app = express()
const projects = data.projects
const workexperience = data.workExperience
const port =5000


app.get('/api/data',(req,res)=>{
    return res.json(data)
    
})

app.listen(port,()=>{
    console.log(`Server port ${port} par chal raha hai`)
})


app .route('/api/projects/:id')
    .get((req,res)=>{
        const id = Number(req.params.id)
        const project = projects.find((data)=> data.id == id)
        return res.json(project)
    })

    
app .route('/api/experience/:id')
    .get((req,res)=>{
        const id = Number(req.params.id)
        const experience = workexperience.find((data)=> data.id == id)
        return res.json(experience)
    })