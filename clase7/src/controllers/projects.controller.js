const project = require('../models/project')
const Proyecto = require('../models/project')

const getProjects = async (req, res) => {
    try{
        const projects = await Proyecto.find({})
        res.status(200).send(projects)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

const getProject = async (req, res) => {
    try{
        res.send("PROYECTO")
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

const createProject = async (req, res) => {
    try{
        let { name, priority, description } = req.body;
        name = name.toLowerCase()
        const project = new Proyecto({name, priority, description})
        await project.save()
        res.status(201).send(project)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
    
}

const updateProject = async (req, res)=>{
    try{
        const { id } = req.params
        const project = await Proyecto.findById(id)
        project.set(req.body)
        project.save()
        res.status(200).send(project)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

const deleteProject = async (req, res)=>{
    try{
        const { id } = req.params
        const deletedProject = await Proyecto.findByIdAndDelete(id)
        res.status(200).send(deletedProject)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

const getProjectTasks = async (req, res) => {
    try{
        res.send("TAREA DE PROYECTO X")
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

module.exports = {
    getProjects,
    getProject, 
    createProject,
    updateProject,
    deleteProject,
    getProjectTasks
}