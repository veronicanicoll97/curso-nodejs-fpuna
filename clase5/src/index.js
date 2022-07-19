const express = require('express');
const { tareaRouter } = require('./routers/tareas.routes');

const app = express();

const port = 3000;



app.use(express.json());


app.get('/', (req, res) => {
  return res.send('API para administrar tareas');
});

app.use('/tareas', tareaRouter);


app.listen(port, () => {
  console.log(`Nuestro Servidor esta corriendo en  http://localhost:${port}/`);
});