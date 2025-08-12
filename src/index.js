const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/database');
const createAdmin = require('./seed/createAdmin');
const cors = require('cors');
const errorMiddleware = require('./middleware/errorMiddleware');
const { createDatabaseIfNotExists } = require('./seed/createDataBase');

const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());

app.use('/api', routes);
app.use(errorMiddleware);
(async () => {
  try {
    // Garante que o banco exista
    await createDatabaseIfNotExists();

    // Sincroniza tabelas
    await sequelize.sync();
    console.log('Banco conectado');

    // Cria admin padrão
    await createAdmin();

    app.listen(PORT, () =>
      console.log('Server is running on http://localhost:3000'),
    );
  } catch (err) {
    console.error('Erro ao iniciar o servidor:', err);
  }
})();
