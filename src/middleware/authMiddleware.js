const { verifyToken } = require('../utils/jwt');
// Middleware para autenticação de rotas privadas
// Verifica se o token JWT é válido e adiciona as informações do usuário à requisição
module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader)
        return res.status(401).json({ error: 'Token não fornecido' });

    const [, token] = authHeader.split(' ');

    try {
        const decoded = verifyToken(token);
        req.user = decoded;
        next();
    } catch {
        return res.status(401).json({ error: 'Token inválido' });
    }
};