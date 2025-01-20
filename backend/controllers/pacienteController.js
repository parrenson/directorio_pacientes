import { getPacientesModel, getPacienteModel, updatePacienteModel } from '../models/pacienteModel.js';
import { getConsultasModel } from '../models/consultaModel.js';
import { processCheckIn } from './consultaController.js';

const getPacientes = (req, res) => {
    const pacientes = getPacientesModel();
    res.status(200).json({
        status: 'success',
        pacientes: pacientes
    });
};

const getPaciente = (req, res) => {
    const { id } = req.params;
    const paciente = getPacienteModel(id);

    if (!paciente) {
        return res.status(404).json({ 
            status: 'error',
            message: 'Paciente no encontrado' 
        });
    }

    const consultas = getConsultasModel(id);
    paciente.consultas = consultas || [];

    res.status(200).json({
        status: 'success',
        paciente: paciente
    });
};

const updatePaciente = (req, res) => { 
    const { id } = req.params;
    const updatedData = req.body;

    const paciente = getPacienteModel(id);

    if (!paciente) {
        return res.status(404).json({ 
            status: 'error',
            message: 'Paciente no encontrado' 
        });
    }

    updatePacienteModel(id, updatedData);

    res.status(200).json({
        status: 'success',
        message: 'Paciente actualizado'
    });
};

const checkIn = (req, res) => { 
    const { id } = req.params;
    const updatedData = req.body;

    const paciente = getPacienteModel(id);

    if (!paciente) {
        return res.status(404).json({ 
            status: 'error',
            message: 'Paciente no encontrado' 
        });
    }

    processCheckIn(req, res, paciente);
};



export { getPacientes, getPaciente, updatePaciente, checkIn };
