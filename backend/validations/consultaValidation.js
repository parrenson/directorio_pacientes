import Joi from 'joi';

const consultaSchema = Joi.object({
    especialista: Joi.string().min(1).required().messages({
        'string.base': 'El nombre del especialista debe ser un texto.',
        'string.min': 'El nombre del especialista no puede estar vacío.',
        'any.required': 'El campo "especialista" es obligatorio.'
    }),
    observacion: Joi.string().min(1).required().messages({
        'string.base': 'La observación debe ser un texto.',
        'string.min': 'La observación no puede estar vacía.',
        'any.required': 'El campo "observacion" es obligatorio.'
    })
});

export default consultaSchema;
