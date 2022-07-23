const express = require('express');
const sequelize = require('./database/database');

require('dotenv').config();



const authRoutes = require('./routes/auth.routes');
const categoriaRouter = require('./routes/categoria.routes');
const productoRouter = require('./routes/producto.routes');


const app = express();

app.use(express.json());

app.use(authRoutes);
app.use(categoriaRouter);
app.use(productoRouter);

(async () => {
  try {
    await sequelize.sync({
      force: false
    });
    app.listen(
      process.env.PORT, 
      () => console.log(`Servidor escuchando en el puerto ${process.env.PORT} 🚀`)
    );
  } catch (error) {
    console.log(error);
  }
})();