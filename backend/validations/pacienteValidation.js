import Joi from 'joi';

const pacienteUpdateSchema = Joi.object({
    paciente: Joi.string().min(1).optional().messages({
        'string.base': 'El nombre del paciente debe ser un texto.',
        'string.min': 'El nombre del paciente no puede estar vacío.'
    }),
    fecha_nacimiento: Joi.date().optional().messages({
        'date.base': 'La fecha de nacimiento debe ser una fecha válida.'
    }),
    tipo_identificacion: Joi.string().valid('CC', 'TI', 'CE', 'PAS').optional().messages({
        'any.only': 'El tipo de identificación debe ser "CC", "TI", "CE" o "PAS".'
    }),
    no_identificacion: Joi.string().alphanum().min(1).optional().messages({
        'string.base': 'El número de identificación debe ser alfanumérico.',
        'string.min': 'El número de identificación no puede estar vacío.'
    }),
    celular: Joi.string().pattern(/^[0-9]{10}$/).optional().messages({
        'string.pattern.base': 'El número de celular debe tener 10 dígitos.'
    }),
    telefono: Joi.string().optional(),
    direccion: Joi.string().min(1).optional().messages({
        'string.base': 'La dirección debe ser un texto.',
        'string.min': 'La dirección no puede estar vacía.'
    }),
    ocupacion: Joi.string().min(1).optional().messages({
        'string.base': 'La ocupación debe ser un texto.',
        'string.min': 'La ocupación no puede estar vacía.'
    }),
    entidad: Joi.string().min(1).optional().messages({
        'string.base': 'La entidad debe ser un texto.',
        'string.min': 'La entidad no puede estar vacía.'
    }),
    estado: Joi.string().valid('Estable', 'Moderado', 'Critico').optional().messages({
        'any.only': 'El estado debe ser "Estable", "Moderado" o "Critico".'
    }),
    tipo_atencion: Joi.string().min(1).optional().messages({
        'string.base': 'El tipo de atención debe ser un texto.',
        'string.min': 'El tipo de atención no puede estar vacío.'
    })
});

export default pacienteUpdateSchema;
