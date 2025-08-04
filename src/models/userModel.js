let users = require('../config/defaultUsers');
// Busca o maior ID atual para incrementar corretamente
let currentId = users
    .filter((u) => typeof u.id === 'number')
    .reduce((max, u) => (u.id > max ? u.id : max), 0);

// Simula um banco de dados de usuários
// (em produção, substitua por uma conexão real com o banco de dados)
module.exports = {
    getAll: () => users,
    findByEmail: (email) => users.find((u) => u.email === email),
    findById: (id) => users.find((u) => u.id === Number(id)),
    add: (user) => {
        currentId += 1;
        const newUser = { id: currentId, ...user };
        users.push(newUser);
        return newUser;
    },
    update: (id, newData) => {
        const index = users.findIndex((u) => u.id === Number(id));
        if (index !== -1) {
            users[index] = {...users[index], ...newData };
        }
    },
    remove: (id) => {
        users = users.filter((u) => u.id !== Number(id));
    },
};