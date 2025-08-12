const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

async function createAdmin() {
  const adminExists = await User.findOne({
    where: { email: 'admin@spsgroup.com.br' },
  });
  if (!adminExists) {
    const hashedPassword = await bcrypt.hash('1234', 10);
    await User.create({
      name: 'Administrador',
      email: 'admin@spsgroup.com.br',
      password: hashedPassword,
      role: 'admin',
    });
    //console.log('Usuário admin criado: admin@example.com / admin123');
  }
}

module.exports = createAdmin;
