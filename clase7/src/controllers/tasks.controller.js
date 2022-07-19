const Task = require('../models/task')

const getTasks = async (req, res) => {
    try{
        res.send("TAREAS")
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

const createTask = async (req, res) => {
    try{
        res.send("TAREA CREADA")
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