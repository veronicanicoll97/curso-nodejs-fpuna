const Router = require('express').Router

const router = Router()

const {
    getTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
} = require('../controllers/tasks.controller')

router.get('/tasks', getTasks)
router.post('/tasks', createTask)
router.put('/tasks/:id', updateTask)
router.delete('/tasks/:id', deleteTask)
router.get('/tasks/:id', getTask)

module.exports = router;