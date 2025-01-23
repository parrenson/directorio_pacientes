import { Table } from '@components';

export const Dashboard = () => {
    const data = [
        {
            id: 123456,
            paciente: "Javier Andrés Caicedo Rodríguez",
            tipo_identificacion: "CC",
            identificacion: "123456789",
            celular: "3015896358",
            entidad: "Eps Sanitas",
            ultimaAtencion: "10/01/2024",
            tipoAtencion: "Consulta de Psiquiatría",
            estado: "Estable",
        },
        {
            id: 165432,
            paciente: "María Fernanda López García",
            tipo_identificacion: "CC",
            identificacion: "402384765",
            celular: "3158206349",
            entidad: "Sura Capita",
            ultimaAtencion: "22/12/2023",
            tipoAtencion: "Consulta de Psicología",
            estado: "Moderado",
        },
        {
            id: 145236,
            paciente: "Juan Carlos Martínez Pérez",
            tipo_identificacion: "CC",
            identificacion: "589623014",
            celular: "3184762095",
            entidad: "Sura Capita",
            ultimaAtencion: "18/02/2024",
            tipoAtencion: "Consulta de Psiquiatría",
            estado: "Estable",
        },
        {
            id: 136524,
            paciente: "Luis Alejandro Hernández Grisales",
            tipo_identificacion: "CC",
            identificacion: "176594302",
            celular: "3219587430",
            entidad: "Particular",
            ultimaAtencion: "10/04/2024",
            tipoAtencion: "Consulta de Psiquiatría",
            estado: "Crítico",
        },
        {
            id: 152463,
            paciente: "Ana Sofía Rodríguez García",
            tipo_identificacion: "CC",
            identificacion: "830165927",
            celular: "3166958420",
            entidad: "Eps Sanidad",
            ultimaAtencion: "11/10/2023",
            tipoAtencion: "Consulta de Psicología",
            estado: "Estable",
        },
    ];

    const getStatusClass = (status) => {
        switch (status) {
            case "Estable":
                return "bg-(--bg-green-color) text-(--text-green-color)";
            case "Moderado":
                return "bg-(--bg-yellow-color) text-(--text-yellow-color)";
            case "Crítico":
                return "bg-(--bg-red-color) text-(--text-red-color)";
            default:
                return "bg-gray-100 text-gray-600";
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
                    <a href="#">
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
                        {row.tipo_identificacion} - {row.identificacion}
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
                        {row.ultimaAtencion}
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
                        {row.tipoAtencion}
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
                    <span className={`w-[120px] h-[31px] flex items-center justify-center rounded-[8px] gap-2.5 opacity-0" ${getStatusClass(row.estado)} text-base font-bold`}>
                        {row.estado}
                    </span>
                )
            }
        },
    ];
    return (
        <>
            <h1 className="text-2xl font-bold text-left text-(--primary-color) mb-10">
                Directorio de Pacientes
            </h1>
            <Table
                headers={headers}
                data={data}
            />
        </>
    );
};
