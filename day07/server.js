const express = require('express')

const app = express()

port = 5000
app.get('/',(req,res)=>{
    return res.send({message:`your api is running on ${port}`})
})

app.listen(port,()=>{
    console.log(`you started the server at ${port}`)
})