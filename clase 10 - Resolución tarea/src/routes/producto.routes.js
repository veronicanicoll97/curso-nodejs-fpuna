const { 
    createProducto, getProductos, 
    getProductosById, deleteProductos,
    updateProducto
} = require('../controler/producto.controller');

const { verifyToken, verificarRole } = require('../middleware/auth.middleware');

const Router = require('express').Router;

const productoRouter = Router();

productoRouter.post('/productos', verifyToken, verificarRole, createProducto);
productoRouter.get('/productos', getProductos);
productoRouter.get('/productos/:id_producto', getProductosById);
productoRouter.delete('/productos/:id_producto', verifyToken, verificarRole, deleteProductos);
productoRouter.put('/productos', verifyToken, verificarRole, updateProducto);


module.exports = productoRouter;