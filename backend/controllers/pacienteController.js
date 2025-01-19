import { getPacientesModel, getPacienteModel } from '../models/pacienteModel.js';

const getPacientes = (req, res) => {
    const pacientes = getPacientesModel();
    res.json(pacientes);
};

const getPaciente = (req, res) => {
    const { id } = req.params;
    const paciente = getPacienteModel(id);

    if (!paciente) {
        return res.status(404).json({ message: 'Paciente no encontrado' });
    }

    res.json(paciente);
};

const updatePaciente = () => { };

const checkIn = () => { };



export { getPacientes, getPaciente, updatePaciente, checkIn };
