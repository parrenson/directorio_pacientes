export const parseTypeID = (type) => {
    const ID = {
        'CC': 'Cédula de Ciudadanía',
        'CE': 'Cédula de Extranjería',
        'TI': 'Tarjeta de Identidad',
        'RC': 'Registro Civil'
    };
    return ID[type] || 'N/A';

}

export const getSClassByStatus = (status) => {
    switch (status) {
        case "Estable":
            return "bg-(--bg-green-color) text-(--text-green-color)";
        case "Moderado":
            return "bg-(--bg-yellow-color) text-(--text-yellow-color)";
        case "Critico":
            return "bg-(--bg-red-color) text-(--text-red-color)";
        default:
            return "bg-gray-100 text-gray-600";
    }
};

export const parseToString = (values) => {
    return Object.fromEntries(
        Object.entries(values).map(([key, value]) => [key, typeof value === 'number' ? String(value) : value])
    );
};

export const randomDoctor = () => {
    const doctors = [
        'Dr. Juan José Borrero', 
        'Dra. Sofia Lopez Buitrago',
        'Dra. Camila Zapata Zuñiga',
        'Dr. José Martinez Lopez'
    ];
    return doctors[Math.floor(Math.random() * doctors.length)];
}
