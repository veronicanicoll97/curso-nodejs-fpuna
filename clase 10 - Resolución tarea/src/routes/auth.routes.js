const { signUp, login } = require('../controler/auth.controller');

const Router = require('express').Router;

const authRouter = Router();

authRouter.post('/signup', signUp);
authRouter.post('/login', login);

module.exports = authRouter;
