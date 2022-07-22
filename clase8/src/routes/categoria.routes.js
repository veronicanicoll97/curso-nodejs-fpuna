const { createCategoria, getCategorias } = require('../controller/categoria.controller');
const { verifyToken, verificarRole } = require('../middleware/auth.middleware');

const Router = require('express').Router;

const categoriaRouter = Router();

categoriaRouter.post('/categorias', verifyToken, verificarRole, createCategoria);
categoriaRouter.get('/categorias', getCategorias);

module.exports = categoriaRouter;