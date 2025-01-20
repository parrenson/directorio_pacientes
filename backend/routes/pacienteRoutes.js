import { Router } from 'express';
import { getPacientes, getPaciente, updatePaciente, checkIn, deleteConsulta } from '../controllers/pacienteController.js';
import validatePaciente from '../middlewares/validatePaciente.js';
import validateConsulta from '../middlewares/validateConsulta.js';
import { generateToken } from '../controllers/authController.js';
import { verifyToken } from '../middlewares/verifyToken.js';

const router = Router();

router.get('/generate-token', generateToken);
router.get('/pacientes', verifyToken, getPacientes);
router.get('/pacientes/:id', verifyToken, getPaciente);
router.put('/pacientes/:id', verifyToken, validatePaciente, updatePaciente);
router.post('/pacientes/:id/checkin', verifyToken, validateConsulta, checkIn);
router.delete('/pacientes/:id/consultas/:consulta', verifyToken, deleteConsulta);


export default router;