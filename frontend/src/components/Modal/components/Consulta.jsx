import PropTypes from "prop-types";
import DeleteIcon from '@assets/delete.svg';

export const Consulta = ({ consulta, onDelete }) => {

    const handleDelete = (id, paciente_id) => () => {
        onDelete({
            id,
            paciente_id
        });
    };

    return (
        <div className="flex flex-col gap-4 bg-white p-2 text-left shadow-md rounded-md">
            <div className="flex justify-between items-center">
                <div>
                    <span className="block font-bold text-(--primary-color)">
                        {consulta.especialista}
                    </span>
                    <span className="block text-(--text-base-color)">{ consulta.profesion }</span>
                </div>
                <button
                    type="button"
                    className="w-[19px] h-[19px]"
                    onClick={handleDelete(consulta.id, consulta.paciente_id)}
                >
                    <img src={DeleteIcon} alt="Eliminar" />
                </button>
            </div>
            <div className="mt-2">
                <p className="text-(--text-base-color)">{consulta.observacion}</p>
            </div>
        </div>
    );
};

Consulta.propTypes = {
    consulta: PropTypes.shape({
        id: PropTypes.string.isRequired,
        paciente_id: PropTypes.string.isRequired,
        especialista: PropTypes.string.isRequired,
        profesion: PropTypes.string.isRequired,
        observacion: PropTypes.string.isRequired,
        fecha_consulta: PropTypes.string
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
};
