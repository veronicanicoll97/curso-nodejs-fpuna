const express = require('express')
const mongoose = require('mongoose')

const projectRoutes = require('./routes/projects.routes')
const taskRoutes = require('./routes/tasks.routes')

const app = express()

//Middlewares
app.use(express.json())

//Routes
app.use(projectRoutes)
app.use(taskRoutes)

const main = async () => {
    try{
        mongoose.connect('mongodb://localhost:27017/proyectotest')
        const db = mongoose.connection;
        db.once('open', ()=>{console.log("Base de datos cconenctada")})
        await app.listen(3000);
        console.log("Server arriba")
    }catch(error){
        console.error(error)
    }
}

main();