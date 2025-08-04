const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../utils/jwt');

// Login de usuário
exports.login = (req, res) => {
    const { email, password } = req.body;
    const user = userModel.findByEmail(email);

    if (!user || !bcrypt.compareSync(password, user.password))
        return res.status(401).json({ error: 'Credenciais inválidas' });

    const token = generateToken({ email: user.email, type: user.type });
    res.json({ token });
};
// Registro de novo usuário
exports.register = (req, res) => {
    const { email, name, type, password } = req.body;

    if (userModel.findByEmail(email))
        return res.status(400).json({ error: 'E-mail já cadastrado' });

    const hashedPassword = bcrypt.hashSync(password, 8);
    userModel.add({ email, name, type, password: hashedPassword });

    res.status(201).json({ message: 'Usuário cadastrado com sucesso' });
};
// Edição de usuário
exports.edit = (req, res) => {
    const { id } = req.params;
    const { name, type, email, password } = req.body;

    const user = userModel.findById(id);
    if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });

    const updatedData = {
        name: name || user.name,
        type: type || user.type,
        email: email || user.email,
        password: password ? bcrypt.hashSync(password, 8) : user.password,
    };

    userModel.update(id, updatedData);
    res.json({ message: 'Usuário atualizado com sucesso' });
};
// Remoção de usuário
exports.remove = (req, res) => {
    const { id } = req.params;

    const user = userModel.findById(id);
    if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });
    if (user.type === 'admin')
        return res
            .status(403)
            .json({ error: 'Não é possível remover um usuário admin' });
    userModel.remove(id);
    res.json({ message: 'Usuário removido com sucesso' });
};
// Listagem de todos os usuários
exports.getAll = (req, res) => {
    res.json(userModel.getAll());
};
// Busca usuário por ID
exports.getById = (req, res) => {
    const { id } = req.params;
    const user = userModel.findById(id);

    if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });

    const { password, ...userWithoutPassword } = user;
    res.json(userWithoutPassword);
};