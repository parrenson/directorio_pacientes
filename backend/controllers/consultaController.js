import { addConsultaModel } from '../models/consultaModel.js';

const processCheckIn = (req, res, paciente) => {
    const { especialista, observacion, fecha_consulta } = req.body;

    const nuevaConsulta = {
        id_paciente: paciente.id,
        especialista,
        observacion,
        fecha_consulta: fecha_consulta || new Date().toISOString()
    };

    addConsultaModel(nuevaConsulta);

    res.status(201).json({
        status: 'success',
        message: 'Consulta registrada'
    });
};

export { processCheckIn };
