# Directorio de pacientes

Este proyecto está desarrollado con **Node.js** (versión 22) y se divide en dos secciones: un **backend** construido con **Express.js** y un **frontend** utilizando **React** y **Vite**. El objetivo principal es gestionar la información de los pacientes y sus consultas, permitiendo realizar acciones como obtener, actualizar y eliminar pacientes y consultas. Además, las rutas protegidas están aseguradas mediante tokens **JWT** para mayor seguridad.

## Tecnologías utilizadas

### Backend:

- **Node.js 22**: Entorno de ejecución para JavaScript en el servidor.
- **Express.js**: Framework para construir aplicaciones web y APIs.
- **JWT (JSON Web Tokens)**: Autenticación y autorización mediante tokens.
- **Joi**: Librería para validación de datos.
- **dotenv**: Gestión de variables de entorno.

### Frontend:

- **React**: Librería para construir interfaces de usuario interactivas.
- **Vite**: Herramienta de construcción rápida para el frontend.
- **Tailwind**: Libreria para manejo de estilos.
- **Formik**: Librería para la gestión y validación de formularios.
- **Moment**: Librería para la manipulación, formateo y visualización de fechas.
- **SweetAlert**: Librería para crear alertas personalizables y con un diseño moderno.

## Instalación

Sigue estos pasos para instalar y ejecutar tanto el **backend** como el **frontend**:

### 1. Clonar el repositorio

Clona el repositorio en tu máquina local:

```bash
git clone https://github.com/parrenson/directorio_pacientes
cd directorio_pacientes
```

### 2. Instalar las dependencias

El proyecto está dividido en dos partes, backend y frontend, por lo que necesitarás instalar las dependencias en ambas carpetas.

#### Backend:

Primero, ve a la carpeta del backend y luego instala las dependencias con Yarn o npm.

- Usando Yarn

```bash
yarn install
```

- Usando NPM

```bash
npm install
```

#### Frontend:

Luego, ve a la carpeta del frontend e instala las dependencias con Yarn o npm.

- Usando Yarn

```bash
yarn install
```

- Usando NPM

```bash
npm install
```

### 3. Ejecutar el servidor

#### Ejecutar backend

Para ejecutar el servidor backend, primero asegúrate de modificar el archivo **.env** on el puerto que desees usar (por defecto es **4000**). Luego, ejecuta alguna de las siguientes opciones:

- Usando Yarn

```bash
yarn dev
```

- Usando NPM

```bash
npm run dev
```

#### Ejecutar frontend

Para ejecutar el frontend, también debes estar dentro de la carpeta del frontend y ejecutar uno de los siguientes comandos:
- Usando Yarn

```bash
yarn dev
```

- Usando NPM

```bash
npm run dev