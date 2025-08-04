const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());

app.use('/api', routes);

app.listen(PORT, () => {
  console.log('Server is running on http://localhost:3000');
});
