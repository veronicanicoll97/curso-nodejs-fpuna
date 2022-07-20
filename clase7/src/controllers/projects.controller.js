const Project = require('../models/project')
const Task = require('../models/task')

const getProjects = async (req, res) => {
    try{
        const projects = await Project.findAll()
        res.json(projects)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

const getProject = async (req, res) => {
    try{
        const { id } = req.params;
        const project = await Project.findOne({id:id})
        res.json(project)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

const createProject = async (req, res) => {
    try{
        const { name, priority, description } = req.body;
        const newProject = await Project.create({
            name: name,
            priority: priority,
            description: description
        })
        res.json(newProject)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
    
}

const updateProject = async (req, res)=>{
    try{
        const { id } = req.params
        const { name, priority, description } = req.body
        const project = await Project.findByPk(id)
        project.name = name
        project.priority = priority
        project.description = description
        await project.save()
        res.json(project)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

const deleteProject = async (req, res)=>{
    try{
        const { id } = req.params
        await Project.destroy({
            where: {
                id: id,
            },
        });
        res.sendStatus(204)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

const getProjectTasks = async (req, res) => {
    try{
        const { id } = req.params
        const tasks = await Task.findAll({
            where: {projectId: id}
        })
        res.json(tasks)
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