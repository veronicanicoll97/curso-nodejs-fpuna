const getProjects = async (req, res) => {
    try{
        res.send("PROYECTOS")
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
        res.send("PROYECTO CREADO")
    }catch(error){
        return res.status(500).json({message: error.message})
    }
    
}

const updateProject = async (req, res)=>{
    try{
        res.send("PROYECTO ACTUALIZADO")
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

const deleteProject = async (req, res)=>{
    try{
        res.send("PROYECTO ELIMINADO")
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