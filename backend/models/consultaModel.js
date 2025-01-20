import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const consultasPath = join(__dirname, '../db/consultas.json');

const readConsultas = () => {
    try {
        const data = readFileSync(consultasPath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
};

const writeConsultas = (consultas) => {
    writeFileSync(consultasPath, JSON.stringify(consultas, null, 2));
};

const getConsultasModel = (paciente_id) => {
    const consultas = readConsultas();
    return consultas.filter(c => c.paciente_id === paciente_id);
};

const addConsultaModel = (consulta) => {
    const consultas = readConsultas();

    const lastId = consultas.length > 0 ? parseInt(consultas[consultas.length - 1].id, 10) : 1;
    const newId = (lastId + 1).toString();
    const newConsulta = { id: newId, ...consulta };

    consultas.push(newConsulta);
    writeConsultas(consultas);
};

const deleteConsultaModel = (consultaId, pacienteId) => {
    const consultas = readConsultas();

    const updatedConsultas = consultas.filter(consulta => consulta.id !== consultaId || consulta.paciente_id !== pacienteId);

    if (consultas.length === updatedConsultas.length) {
        return false;
    }

    writeConsultas(updatedConsultas);
    return true;
};

export { getConsultasModel, addConsultaModel, deleteConsultaModel };
