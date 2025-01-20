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

    const newId = consultas.length > 0 ? consultas[consultas.length - 1].id + 1 : 1;
    const newConsulta = { ...consulta, id: newId };

    consultas.push(newConsulta);
    writeConsultas(consultas);
};

export { getConsultasModel, addConsultaModel };
