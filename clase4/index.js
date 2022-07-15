const express = require('express');
const { v4: uuid } = require('uuid');
const bodyParser = require('body-parser')
const app = express();
const port = 5000;

let tareas = [];

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('API para administrar tareas');
});

app.get('/tarea', (req, res) => {
  res.status(200).json({
    status: 'ok',
    data: tareas,
  });
});

app.post('/tarea', (req, res) => {
  console.log(req.body);
  const newTarea = {
    id: uuid(),
    ...req.body,
  };
  tareas.push(newTarea);
  res.status(201).json({
    status: 'ok',
    data: newTarea,
  });
});

app.get('/tarea/:id', (req, res) => {
  const target = req.params.id;
  const tareaSolicitada = tareas.find(item => item.id === target);

  if (!tareaSolicitada) {
    return res.status(404).json({
      status: 'Not found',
    });
  }

  res.status(200).json({
    status: 'ok',
    data: tareaSolicitada,
  });
});

app.delete('/tarea/:id', (req, res) => {
  const target = req.params.id;
  const tareaSolicitada = tareas.find(item => item.id === target);

  if (!tareaSolicitada) {
    return res.status(404).json({
      status: 'Not found',
    });
  }

  tareas = tareas.filter(item => item.id !== target);

  res.status(200).json({
    status: 'ok',
    data: tareaSolicitada,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});