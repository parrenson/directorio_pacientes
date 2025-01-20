import { Router } from 'express';
import { getPacientes, getPaciente, updatePaciente, checkIn } from '../controllers/pacienteController.js';
import validatePaciente from '../middlewares/validatePaciente.js';
import validateConsulta from '../middlewares/validateConsulta.js';

const router = Router();

router.get('/pacientes', getPacientes);
router.get('/pacientes/:id', getPaciente);
router.put('/pacientes/:id', validatePaciente, updatePaciente);
router.post('/pacientes/:id/checkin', validateConsulta, checkIn);


export default router;