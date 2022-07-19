const { tareas } = require("../mis_tareas");
const { findTarea } = require("../services/tareas.service");

const getTareasController = (req, res) => {
  const limit = Number(req.query.limit);
  const completadoQuery = Number(req.query.completado);

  const limitedTareas = tareas.slice(0, limit);

  let esCompletado = completadoQuery === 1 ? true : false;

  const tareasLimitadaCompletada = limitedTareas.filter(tarea => tarea.completado === esCompletado);

  return res.status(200).json({
    status: 'ok',
    data: tareas,
  });
}

const getTareaController = (req, res) => {
  const target = +req.params.id;
  const tareaSolicitada = findTarea(target);

  if (!tareaSolicitada) {
    return res.status(404).json({
      status: 'Not found',
    });
  }

  return res.status(200).json({
    status: 'ok',
    data: tareaSolicitada,
  });

}


const postTareaController = (req, res) => {
  const body = req.body;
  console.log(body);

  const existeTarea = findTarea(body.id);
  if (!existeTarea) {
    return res.json({
      status: 'Duplicado',
      data: {},
    });
  }

  //Se agrega a la BD guau
  const nuevaLista = tareas.push(body);

  return res.status(201).json({
    status: 'ok',
    data: body,
  });

}

const putTareaController = (req, res) => {

  const body = req.body;
  const id = +req.params.id;

  console.log(body);
  const existeTarea = findTarea(id);

  if (!existeTarea) {
    return res.status(404).json(
      {
        status: "Not Found"
      }
    );
  }

  //Realizamos una actualizacion en la BD

  return res.status(200).json({
    status: "ok",
    data: body
  });

}


module.exports = {
  getTareasController,
  getTareaController,
  postTareaController,
  putTareaController
}