const { createCategoria, getCategorias } = require('../controller/categoria.controller');
const { verifyToken } = require('../middleware/auth.middleware');

const Router = require('express').Router;

const categoriaRouter = Router();

categoriaRouter.post('/categorias', verifyToken, createCategoria);
categoriaRouter.get('/categorias', getCategorias);

module.exports = categoriaRouter;