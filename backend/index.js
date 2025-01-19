import express, { json } from 'express';
import dotenv from 'dotenv';
import pacienteRoutes from './routes/pacienteRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());

app.use('/api', pacienteRoutes);

app.listen(PORT, () => {
  console.log(`Servidor ejecutandose en el puerto ${PORT}`);
});


