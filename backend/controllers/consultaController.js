import { addConsultaModel, getConsultasModel, deleteConsultaModel } from '../models/consultaModel.js';

const getConsultas = (id) => {
    const consultas = getConsultasModel(id);
    return consultas || [];

};

const consultaCheckIn = (req, res, paciente) => {
    const { especialista, observacion } = req.body;

    const nuevaConsulta = {
        paciente_id: paciente,
        especialista,
        observacion,
        fecha_consulta: new Date().toISOString()
    };

    addConsultaModel(nuevaConsulta);

    res.status(201).json({
        status: 'success',
        message: 'Consulta registrada'
    });
};

const deleteConsultaById = (req, res, paciente) => {
    const { consulta } = req.params; 

    const isDeleted = deleteConsultaModel(consulta, paciente);

    if (!isDeleted) {
        return res.status(404).json({
            status: 'error',
            message: 'Consulta no encontrada'
        });
    }

    res.status(200).json({
        status: 'success',
        message: 'Consulta eliminada'
    });
};

export { getConsultas, consultaCheckIn, deleteConsultaById };
