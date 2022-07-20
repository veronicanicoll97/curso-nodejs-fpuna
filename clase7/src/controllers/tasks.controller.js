const Task = require('../models/task')
const Proyecto = require('../models/project')

const getTasks = async (req, res) => {
    try{
        const tasks = await Task.find({})
        res.status(200).send(tasks)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

const createTask = async (req, res) => {
    try{
        let { name, done } = req.body;
        name = name.toLowerCase()
        const task = new Task({name,done})
        const project = await Proyecto.findById(req.body.proyecto)
        task.proyecto = project
        console.log(project)
        project.tasks.push(task)
        console.log(project)
        await task.save()
        await project.save()
        res.status(201).send(project)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

const getTask = async (req, res) => {
    try{
        res.send("TAREA")
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

const updateTask = async (req, res) => {
    try{
        res.send("TAREA ACTUALIZADA")

    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

const deleteTask = async (req, res) => {
    try{
        res.send("TAREA ELIMINADA")
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

module.exports = {
    getTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}