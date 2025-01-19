import pacienteSchema from '../validations/pacienteValidation.js';

const validatePaciente = (req, res, next) => {
    const { error } = pacienteSchema.validate(req.body, { abortEarly: false });

    if (error) {
        const errorDetails = error.details.map(err => ({
            field: err.path.join('.'),
            message: err.message
        }));

        return res.status(400).json({
            status: 'error',
            message: 'Datos inválidos',
            errors: errorDetails
        });
    }

    next();
};

export default validatePaciente;
