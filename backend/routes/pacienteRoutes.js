import { Router } from 'express';
import { getPacientes, getPaciente, updatePaciente, checkIn } from '../controllers/pacienteController.js';

const router = Router();

router.get('/pacientes', getPacientes);
router.get('/pacientes/:id', getPaciente);
router.put('/pacientes/:id', updatePaciente);
router.post('/pacientes/:id/checkin', checkIn);


export default router;