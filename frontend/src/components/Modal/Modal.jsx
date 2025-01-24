
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import PropTypes from "prop-types";
import { Formik, Field } from 'formik';
import CloseIcon from '@assets/close.svg';
import EditIcon from '@assets/edit.svg';
import { Consulta } from '@components/Modal/components';

export const Modal = ({ isOpen, onClose, title, fields, initialValues, onSubmit, onEdit, onDelete }) => {

    const handleEdit = (fieldName) => {
        onEdit(fieldName);
    };

    const validations = (values) => {
        const errors = {};

        fields.forEach(field => {
            if (field.type !== 'span' && field.type !== 'textarea' && !values[field.name]) {
                errors[field.name] = `${field.label} es obligatorio`;
            }
            if (field.type === 'number' && values[field.name] && isNaN(values[field.name])) {
                errors[field.name] = `${field.label} debe ser en formato numérico`;
            }
        });

        return errors;
    };

    const colSpanClasses = {
        1: 'col-span-1',
        2: 'col-span-2',
        3: 'col-span-3',
        4: 'col-span-4',
        5: 'col-span-5',
        6: 'col-span-6',
    };

    return (
        <Dialog open={isOpen} onClose={() => { }} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
            />
            <div className="fixed inset-0 z-10 flex items-center justify-center p-4">
                <div className="flex w-full max-w-[464px] sm:max-w-[640px] lg:max-w-[768px] p-0 sm:p-4">
                    <DialogPanel
                        transition
                        className="relative w-full max-w-[464px] sm:max-w-[640px] lg:max-w-[768px] min-h-[min(100%, 650px)] max-h-screen overflow-y-auto rounded-lg bg-white text-center shadow-xl scrollbar-hidden transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-4 w-[18px] h-[18px]"
                            aria-label="Cerrar"
                        >
                            <img src={CloseIcon} alt="Cerrar" className="w-full h-full" />
                        </button>
                        <div className="bg-white p-4 sm:p-6 sm:pb-4 max-h-[calc(100vh-80px)]">
                            <div className="sm:flex sm:items-center">
                                <div className="text-center sm:mt-0 sm:text-center">
                                    <div className="flex flex-col items-center w-full gap-6">
                                        <DialogTitle as="h3" className="text-xl sm:text-2xl font-bold text-(--primary-color)">
                                            {title}
                                        </DialogTitle>
                                    </div>
                                    <Formik
                                        initialValues={initialValues}
                                        validate={validations}
                                        onSubmit={onSubmit}
                                    >
                                        {({ handleSubmit, errors, touched }) => (
                                            <form onSubmit={handleSubmit}>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mt-6 text-left">
                                                    {fields.map((field, index) => (
                                                        <div
                                                            key={index}
                                                            className={`${colSpanClasses[field.colspan] || 'col-span-1'} w-full`}
                                                        >
                                                            <div className="flex items-center">
                                                                <label
                                                                    htmlFor={field.name}
                                                                    className="block font-bold text-(--primary-color)"
                                                                >
                                                                    {field.label}
                                                                </label>
                                                                {field.icon && (
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => handleEdit(field.name)}
                                                                        className="ml-2"
                                                                    >
                                                                        <img src={field.icon === 'edit' ? EditIcon : ''} alt="Editar" className="w-[19px] h-[19px]" />
                                                                    </button>
                                                                )}
                                                            </div>
                                                            {field.type === 'textarea' ? (
                                                                <Field
                                                                    as="textarea"
                                                                    id={field.name}
                                                                    name={field.name}
                                                                    placeholder={field.placeholder}
                                                                    className="w-full h-[127px] rounded border border-gray-300 p-2 resize-none focus:outline-none text-(--text-base-color)"
                                                                />
                                                            ) : field.type === 'span' ? (
                                                                <span className="block text-(--text-base-color)">
                                                                    {initialValues[field.name] || 'No hay datos disponibles'}
                                                                </span>
                                                            ) : (
                                                                <Field
                                                                    type={field.type || 'text'}
                                                                    id={field.name}
                                                                    name={field.name}
                                                                    placeholder={field.placeholder}
                                                                    className={`w-full rounded border ${errors[field.name] && touched[field.name] ? 'border-red-500' : 'border-gray-300'} p-2`}
                                                                />
                                                            )}
                                                            {errors[field.name] && touched[field.name] && (
                                                                <div className="text-red-500 text-xs mt-1">{errors[field.name]}</div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="mt-6 sm:flex sm:flex-row-reverse">
                                                    <button
                                                        type="submit"
                                                        className="inline-flex w-full sm:w-auto justify-center rounded-md px-3 py-2 text-base font-bold text-(--text-green-color)"
                                                    >
                                                        Guardar
                                                    </button>
                                                </div>
                                                {initialValues.consultas && initialValues.consultas.length > 0 && (
                                                    <div className="mt-4">
                                                        <div className="flex flex-col gap-4">
                                                            {initialValues.consultas.map((consulta, index) => (
                                                                <div key={index} className="mb-4">
                                                                    <Consulta consulta={consulta} onDelete={onDelete} />
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </form>
                                        )}
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>

    )
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    fields: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            type: PropTypes.oneOf(['text', 'textarea', 'date', 'number', 'span']),
            placeholder: PropTypes.string,
            colspan: PropTypes.number,
        })
    ).isRequired,
    initialValues: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired
};
