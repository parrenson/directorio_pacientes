import { useState, useEffect } from "react";
import { Table, Modal } from '@components';
import { getPacientes, getPaciente, updatePaciente, createConsulta, deleteConsulta } from '@services';
import { parseTypeID, getSClassByStatus, parseToString, randomDoctor } from '@utils';
import moment from 'moment';
import Swal from 'sweetalert2';

export const Dashboard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pacientes, setPacientes] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState({
        id: "",
        paciente: "",
        tipo_identificacion: "",
        identificacion: "",
        celular: "",
        entidad: "",
        ultimaAtencion: "",
        tipoAtencion: "",
        estado: "",
        consultas: [],
    });

    useEffect(() => {
        fetchPacientes();
    }, []);

    const fetchPacientes = async () => {
        try {
            const pacientes = await getPacientes();
            pacientes.map((paciente) => {
                paciente.ultimo_consulta = moment(paciente.ultimo_consulta).format('DD/MM/YYYY');
                return paciente;
            });
            setPacientes(pacientes);
        } catch (error) {
            console.error('Error al obtener pacientes:', error);
        }
    };

    const headers = [
        {
            id: "id",
            header: "ID",
            className: "w-[100px] gap-2",
            cell: (row) => {
                return (
                    <span className='text-(--text-base-color)'>
                        {row.id}
                    </span>
                );
            }
        },
        {
            id: "paciente",
            header: "Paciente",
            className: "w-[300px] gap-2",
            cell: (row) => {
                return (
                    <a
                        onClick={(e) => {
                            e.preventDefault()
                            handleModalOpen(row);
                        }}
                        className="cursor-pointer"
                    >
                        <h6 className='underline decoration-solid decoration-skip-ink-none text-(--text-link-color)'>
                            {row.paciente}
                        </h6>
                    </a>
                )
            }
        },
        {
            id: "identificacion",
            header: "Identificación",
            className: "w-[139px] gap-0",
            cell: (row) => {
                return (
                    <span className='text-(--text-base-color)'>
                        {row.tipo_identificacion} - {row.no_identificacion}
                    </span>
                )
            }
        },
        {
            id: "celular",
            header: "Celular",
            className: "w-[139px] gap-0",
            cell: (row) => {
                return (
                    <span className='text-(--text-base-color)'>
                        {row.celular}
                    </span>
                )
            }
        },
        {
            id: "entidad",
            header: "Entidad",
            className: "w-[139px] gap-0",
            cell: (row) => {
                return (
                    <span className='text-(--text-base-color)'>
                        {row.entidad}
                    </span>
                )
            }
        },
        {
            id: "ultimaAtencion",
            header: "Última Atención",
            className: "w-[139px] gap-0",
            cell: (row) => {
                return (
                    <span className='text-(--text-base-color)'>
                        {row.ultimo_consulta}
                    </span>
                )
            }
        },
        {
            id: "tipoAtencion",
            header: "Tipo de Atención",
            className: "w-[139px] gap-0",
            cell: (row) => {
                return (
                    <span className='text-(--text-base-color)'>
                        {row.tipo_atencion}
                    </span>
                )
            }

        },
        {
            id: "estado",
            header: "Estado",
            className: "w-[120px] gap-0",
            cell: (row) => {
                return (
                    <span className={`w-[120px] h-[31px] flex items-center justify-center rounded-[8px] gap-2.5 opacity-0" ${getSClassByStatus(row.estado)} text-base font-bold`}>
                        {row.estado}
                    </span>
                )
            }
        },
    ];

    const [modalFields, setModalFields] = useState([
        { name: 'paciente', label: 'Paciente', type: 'span', colspan: 2 },
        { name: 'fecha_nacimiento', label: 'Fecha de nacimiento', type: 'span', colspan: 1 },
        { name: 'edad', label: 'Edad', type: 'span', colspan: 1 },
        { name: 'tipo_identificacion', label: 'Tipo de Identificación', type: 'span', colspan: 1 },
        { name: 'no_identificacion', label: 'N° de Identificación', type: 'span', colspan: 1 },
        { name: 'celular', label: 'Celular', type: 'span', colspan: 1, icon: 'edit' },
        { name: 'telefono', label: 'Teléfono', type: 'span', colspan: 1 },
        { name: 'direccion', label: 'Dirección', type: 'span', colspan: 1 },
        { name: 'ocupacion', label: 'Ocupación', type: 'span', colspan: 1 },
        { name: 'observacion', label: 'Agregar Observación', type: 'textarea', colspan: 2, placeholder: 'Observación' }
    ]);

    const handleModalOpen = async (data) => {
        const id = data.id;
        try {
            const paciente = await getPaciente(id);
            const birthDate = moment(paciente.fecha_nacimiento, 'YYYY-MM-DD');
            const age = moment().diff(birthDate, 'years');
            paciente.edad = age;
            paciente.tipo_identificacion = parseTypeID(paciente.tipo_identificacion);
            paciente.consultas.map((consulta) => {  
                consulta.profesion = 'Médico General';
                return consulta;
            });
            setSelectedPatient(paciente);
        } catch (error) {
            console.error('Error al obtener paciente:', error);
        }
        setIsModalOpen(true);
    };

    const handleEdit = (fieldName) => {
        setModalFields((prevFields) =>
            prevFields.map((field) =>
                field.name === fieldName ? { ...field, type: 'number' } : field
            )
        );
    };
    const errorAlert = (error) => {
        Swal.fire({
            title: 'Error',
            text: error,
            icon: 'error',
            confirmButtonText: 'Cerrar',
            confirmButtonColor: '#0F4C81'
        });
    };

    const successAlert = (title) => {
        Swal.fire({
            title: title,
            icon: 'success',
            confirmButtonText: 'Cerrar',
            confirmButtonColor: '#0F4C81'
        });
    };

    const handleSubmit = async (values) => {
        try {
            const { id, paciente, direccion, ocupacion, celular, telefono, observacion } = parseToString(values);
            await fetchUpdatePaciente(id, { paciente, direccion, ocupacion, celular, telefono });
    
            if(observacion) {
                const especialista = randomDoctor();
                await fetchCreateConsulta(id, { especialista, observacion });
            }
        } catch(error) {
            if (error.response && error.response.status === 400) {
                const errors = error.response.data.errors;

                const errorMessages = errors.map((err) => err.message).join('\n');
                errorAlert(errorMessages);
            }
        }
        setIsModalOpen(false);
    }

    const handleDeleteConsulta = async (values) => {
        try {
            const { id, paciente_id } = values;
            await fetchDeleteConsulta(id, paciente_id);
        } catch (error) {
            if (error.response && error.response.status === 404) {
                const errors = error.response.data.errors;

                const errorMessages = errors.map((err) => err.message).join('\n');
                errorAlert(errorMessages);
            }
        }
        setIsModalOpen(false);
    };

    const fetchUpdatePaciente = async (id, data) => {
        await updatePaciente(id, data);
        fetchPacientes();
        successAlert('Paciente actualizado');
    };

    const fetchCreateConsulta = async (id, data) => {
        await createConsulta(id, data);
        fetchPacientes();
        successAlert('Consulta creada');
    };

    const fetchDeleteConsulta = async (id, paciente_id) => {
        await deleteConsulta(id, paciente_id);
        successAlert('Consulta eliminada');
    };

    return (
        <>
            <h1 className="text-2xl font-bold text-left text-(--primary-color) mb-10">
                Directorio de Pacientes
            </h1>
            <Table
                headers={headers}
                data={pacientes}
            />
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onEdit={handleEdit}
                onDelete={(values) => handleDeleteConsulta(values) }
                title="Información Paciente"
                fields={modalFields}
                initialValues={selectedPatient}
                onSubmit={(values) => handleSubmit(values) }
            />

        </>
    );
};
