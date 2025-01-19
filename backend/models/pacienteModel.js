import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pacientesPath = join(__dirname, '../db/pacientes.json');

const readPacientes = () => {
    const data = readFileSync(pacientesPath, 'utf-8');
    return JSON.parse(data);
};

const getPacientesModel = () => {
    return readPacientes();
};

const getPacienteModel = (id) => {
    const pacientes = readPacientes();
    return pacientes.find((paciente) => paciente.id === id);
};

export { getPacientesModel, getPacienteModel };