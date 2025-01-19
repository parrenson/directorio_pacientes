const express = require('express');
const directoryRoutes = require('./routes/directoryRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/directory', directoryRoutes);

app.listen(PORT, () => {
  console.log(`Servidor ejecutandose en el puerto ${PORT}`);
});


