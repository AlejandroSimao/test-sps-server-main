const bcrypt = require('bcryptjs');

// Modelo de usuário com operações CRUD
module.exports = [{
    id: 1,
    email: 'admin@spsgroup.com.br',
    name: 'admin',
    type: 'admin',
    password: bcrypt.hashSync('1234', 8),
}, ];