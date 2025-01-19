import { Router } from 'express';
import { getPacientes, getPaciente, updatePaciente, checkIn } from '../controllers/pacienteController.js';
import validatePaciente from '../middlewares/validatePaciente.js';

const router = Router();

router.get('/pacientes', getPacientes);
router.get('/pacientes/:id', getPaciente);
router.put('/pacientes/:id', validatePaciente, updatePaciente);
router.post('/pacientes/:id/checkin', checkIn);


export default router;