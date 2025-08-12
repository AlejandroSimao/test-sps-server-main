const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

async function getAll() {
  return await User.findAll();
}

async function getById(id) {
  return await User.findByPk(id);
}

async function register(userData) {
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  return await User.create({ ...userData, password: hashedPassword });
}

async function edit(id, data) {
  const user = await User.findByPk(id);
  if (!user) throw new Error('Usuário não encontrado');
  await user.update(data);
  return user;
}

async function remove(id) {
  const user = await User.findByPk(id);
  if (!user) throw new Error('Usuário não encontrado');
  await user.destroy();
}
async function findByEmail(email) {
  return await User.findOne({ where: { email } });
}

module.exports = { getAll, getById, register, edit, remove, findByEmail };
