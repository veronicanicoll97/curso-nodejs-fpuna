const Task = require('../models/task')

const getTasks = async (req, res) => {
    try{
        const tasks = await Task.findAll()
        res.json(tasks)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

const createTask = async (req, res) => {
    try{
        const { name, done, projectId } = req.body;
        const newTask = await Task.create({
            name: name,
            done: done,
            projectId: projectId
        })
        res.json(newTask)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

const getTask = async (req, res) => {
    try{
        const { id } = req.params;
        const task = await Task.findOne({id:id})
        res.json(task)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

const updateTask = async (req, res) => {
    try{
        const { id } = req.params
        const { name, done } = req.body
        const task = await Task.findByPk(id)
        task.set(req.body)
        await task.save()
        res.json(task)

    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

const deleteTask = async (req, res) => {
    try{
        const { id } = req.params
        await Task.destroy({
            where: {
                id: id,
            },
        });
        res.sendStatus(204)
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