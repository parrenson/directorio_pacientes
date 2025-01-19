const express = require('express');
const { getAllPatients, getPatient, updatePatient, checkIn  } = require('../controllers/pacienteController');

const router = express.Router();

router.get('/directory', getAllPatients);
router.get('/directory/:id', getPatient);
router.put('/directory/:id', updatePatient);
router.post('/directory/:id/checkin', checkIn);


module.exports = router;