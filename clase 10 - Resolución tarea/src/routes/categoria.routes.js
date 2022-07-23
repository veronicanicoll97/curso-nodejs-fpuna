const { 
    createCategoria, getCategorias, 
    getCategoriaById, deleteCategoria,
    updateCategoria
} = require('../controler/categoria.controller');
const { verifyToken, verificarRole } = require('../middleware/auth.middleware');

const Router = require('express').Router;

const categoriaRouter = Router();

categoriaRouter.post('/categorias', verifyToken, verificarRole, createCategoria);
categoriaRouter.get('/categorias', getCategorias);
categoriaRouter.get('/categorias/:id_categoria', getCategoriaById);
categoriaRouter.delete('/categorias/:id_categoria', verifyToken, verificarRole, deleteCategoria);
categoriaRouter.put('/categorias', verifyToken, verificarRole, updateCategoria);

module.exports = categoriaRouter;