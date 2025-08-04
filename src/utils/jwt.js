const jwt = require('jsonwebtoken');
const SECRET = 'test-sps-server-main'; // Chave secreta para assinatura dos tokens JWT

//Geração e verificação de tokens JWT
module.exports = {
    generateToken: (payload) => jwt.sign(payload, SECRET, { expiresIn: '1h' }),
    verifyToken: (token) => jwt.verify(token, SECRET),
};