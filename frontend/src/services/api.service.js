import axiosInstance from '@services/axios';

export const getPacientes = async () => {
    try {
        const response = await axiosInstance.get('/pacientes');
        return response.data.pacientes;
    } catch (error) {
        console.error('Error al obtener pacientes', error);
        throw error;
    }
};

export const getPaciente = async (id) => {
    try {
        const response = await axiosInstance.get(`/pacientes/${id}`);
        return response.data.paciente;
    } catch (error) {
        console.error('Error al obtener paciente', error);
        throw error;
    }
};

export const updatePaciente = async (id, data) => {
    try {
        const response = await axiosInstance.put(`/pacientes/${id}`, data);
        return response.data;
    } catch (error) {
        console.error('Error al actualizar paciente', error);
        throw error;
    }
};

export const createConsulta = async (id, data) => {
    try {
        const response = await axiosInstance.post(`/pacientes/${id}/checkin`, data);
        return response.data;
    } catch (error) {
        console.error('Error al crear consulta', error);
        throw error;
    }
};

export const deleteConsulta = async (id, paciente_id) => {
    try {
        const response = await axiosInstance.delete(`/pacientes/${paciente_id}/consultas/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error al eliminar consulta', error);
        throw error;
    }
};