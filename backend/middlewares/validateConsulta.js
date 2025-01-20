import consultaSchema from '../validations/consultaValidation.js';

const validateConsulta = (req, res, next) => {
    const { error } = consultaSchema.validate(req.body, { abortEarly: false });

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

export default validateConsulta;
