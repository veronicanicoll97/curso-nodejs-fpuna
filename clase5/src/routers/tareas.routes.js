const app = require('express');

const { getTareasController, getTareaController, postTareaController, putTareaController } = require('../controllers/tareas.controller');


const tareaRouter = app.Router();

tareaRouter.get('/', getTareasController);

tareaRouter.get('/:id', getTareaController);

tareaRouter.post('/', postTareaController);

tareaRouter.put('/:id', putTareaController);



module.exports = {
  tareaRouter
};