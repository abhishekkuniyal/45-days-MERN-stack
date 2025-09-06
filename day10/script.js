const data = require('./data.json')
const express = require('express')
const port = 5000
const app = express()
const fs = require('fs')
const projects = data.projects


// middleware
app.use(express.urlencoded({extended : false}))

//post request
app.post('/api/project',(req,res)=>{
  const project = req.body;
  const newproject = { ...project, id: projects.length + 1 };
  projects.push(newproject);
  fs.writeFile('./data.json', JSON.stringify({ projects }), () => {
    return res.send("Project saved successfully");
  });
});





app.get('/api/project/:id',(req,res)=>{
    const id = Number(req.params.id)
    const project = projects.find((data)=> data.id == id)
    return res.json(project)
})

app.listen(port,()=>{
    console.log('server is started on port 5000')
})