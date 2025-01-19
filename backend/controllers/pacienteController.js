import { getPacientesModel } from '../models/pacienteModel.js';

const getPacientes = (req, res) => {
  const pacientes = getPacientesModel();
  res.json(pacientes);
};

const getPaciente = () => {};

const updatePaciente = () => {};

const checkIn = () => {};



export { getPacientes, getPaciente, updatePaciente, checkIn };
