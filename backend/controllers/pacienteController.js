import { getPacientesModel, getPacienteModel, updatePacienteModel } from '../models/pacienteModel.js';
import { consultaCheckIn, getConsultas, deleteConsultaById } from './consultaController.js';

const getPacientes = (req, res) => {
    const pacientes = getPacientesModel();

    pacientes.map((paciente) => {
        const consultas = getConsultas(paciente.id);
        if (consultas.length > 0) {
            const ultimaConsulta = consultas[consultas.length - 1];
            paciente.ultimo_consulta = ultimaConsulta.fecha_consulta;
        } else paciente.ultimo_consulta = '';
    });

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

    const consultas = getConsultas(id);
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

    const paciente = getPacienteModel(id);

    if (!paciente) {
        return res.status(404).json({ 
            status: 'error',
            message: 'Paciente no encontrado' 
        });
    }
     
    return consultaCheckIn(req, res, paciente.id);
};

const deleteConsulta = (req, res) => {
    const { id } = req.params; 

    const paciente = getPacienteModel(id);

    if (!paciente) {
        return res.status(404).json({
            status: 'error',
            message: 'Paciente no encontrado'
        });
    }

    return deleteConsultaById(req, res, id);
}



export { getPacientes, getPaciente, updatePaciente, checkIn, deleteConsulta };
