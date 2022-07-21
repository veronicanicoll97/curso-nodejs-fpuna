const express = require('express');
const sequelize = require('./database/database');

const authRoutes = require('./routes/auth.routes');
const categoriaRouter = require('./routes/categoria.routes');

const PORT = 5000;

const app = express();

app.use(express.json());

app.use(authRoutes);
app.use(categoriaRouter);

(async () => {
  try {
    await sequelize.sync();
    app.listen(PORT, () => console.log('Server arriba'));
  } catch (error) {
    console.log(error);
  }
})();
