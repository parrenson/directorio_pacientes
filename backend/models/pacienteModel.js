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

const savePacientes = (pacientes) => {
    writeFileSync(pacientesPath, JSON.stringify(pacientes, null, 2));
};

const getPacienteModel = (id) => {
    const pacientes = readPacientes();
    return pacientes.find((paciente) => paciente.id === id);
};

const updatePacienteModel = (id, updatedData) => {
    const pacientes = readPacientes();
    const index = pacientes.findIndex(paciente => paciente.id === id);
    if (index !== -1) {
        pacientes[index] = { ...pacientes[index], ...updatedData };
        savePacientes(pacientes);
        return pacientes[index];
    }
    return null;
}

export { 
    getPacientesModel, 
    getPacienteModel, 
    updatePacienteModel
};