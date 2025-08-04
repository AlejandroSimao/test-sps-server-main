const { Router } = require('express');

const routes = Router();
const userController = require('./controllers/userController');
const authMiddleware = require('./middleware/authMiddleware');

// Rota pública
routes.post('/login', userController.login);

// Rotas privadas
routes.use(authMiddleware);
routes.get('/users', userController.getAll);
routes.get('/users/:id', userController.getById);
routes.post('/users', userController.register);
routes.put('/users/:id', userController.edit);
routes.delete('/users/:id', userController.remove);

module.exports = routes;
