const bcrypt = require('bcryptjs');
const { generateToken } = require('../utils/jwt');
const userService = require('../services/userService');

// Login de usuário
async function login(req, res) {
  const { email, password } = req.body;
  const user = await userService.findByEmail(email);

  if (!user || !bcrypt.compareSync(password, user.password))
    return res.status(401).json({ error: 'Credenciais inválidas' });

  const token = generateToken({ email: user.email, type: user.type });
  res.json({ token });
}
// Registro de novo usuário
async function register(req, res, next) {
  try {
    const newUser = await userService.register(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
}
// Edição de usuário
async function edit(req, res, next) {
  try {
    const updatedUser = await userService.edit(req.params.id, req.body);
    res.json(updatedUser);
  } catch (err) {
    next(err);
  }
}
// Remoção de usuário
async function remove(req, res, next) {
  try {
    await userService.remove(req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}
// Listagem de todos os usuários
async function getAll(req, res, next) {
  try {
    const users = await userService.getAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
}
// Busca usuário por ID
async function getById(req, res, next) {
  try {
    const user = await userService.getById(req.params.id);
    if (!user)
      return res.status(404).json({ message: 'Usuário não encontrado' });
    res.json(user);
  } catch (err) {
    next(err);
  }
}

module.exports = { login, getAll, getById, register, edit, remove };
