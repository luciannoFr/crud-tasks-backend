

# CRUD de Tareas

proyecto **crud-task-backend**. Este repositorio contiene una aplicación de CRUD (Crear, Leer, Actualizar, Eliminar) para gestionar tareas, implementada en **JavaScript** usando **Node.js**, **MariaDB** (en mi caso utilicé **XAMPP** y **Express**.

## Contenido del repositorio

1. [Descripción](#descripción)
2. [Requisitos](#requisitos)
3. [Instalación](#instalación)
4. [Uso](#uso)
5. [Contribución](#contribución)
6. [Licencia](#licencia)

## Descripción

La aplicación **CRUD de Tareas** permite a los usuarios gestionar una lista de tareas mediante una interfaz web. Los usuarios pueden:

- Añadir nuevas tareas
- Ver todas las tareas
- Editar tareas existentes
- Eliminar tareas

El backend está construido con **Node.js** y **Express**,(tambien contiene dependencias como **cors**, **morgan**, **nodemon**, **mysql2** y **body-parser** para que se cumpla adecuadamente el envio de datos), mientras que la base de datos se gestiona con **MariaDB** a través de **XAMPP**.

## Requisitos

Antes de comenzar, asegúrate de tener instalados los siguientes requisitos:

- [Node.js](https://nodejs.org/) (v14 o superior)
- [npm](https://www.npmjs.com/) (v6 o superior)
- [XAMPP](https://www.apachefriends.org/index.html) (para MariaDB)

## Instalación

Para instalar y configurar el proyecto, sigue estos pasos:

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/luciannoFr/crud-tasks-backend
   ```

2. **Navega al directorio del proyecto**:

   ```bash
   cd carpeta-Destino
   ```

3. **Instala las dependencias**:

   ```bash
   npm install express cors morgan nodemon mysql2 body-parser
   ```

4. **Configura la base de datos**:

   - Abre XAMPP y asegúrate de que los servicios de **Apache** y **MySQL** están en ejecución.
   - Accede a **phpMyAdmin** a través de `http://localhost/phpmyadmin`.
   - Crea una base de datos llamada `tasks_db`.
   - Importa el archivo de base de datos proporcionado en `db/task_db.sql`:
     - En **phpMyAdmin**, selecciona la base de datos `tasks_db`.
     - Ve a la pestaña **Importar** y selecciona el archivo `task_db.sql` del repositorio.
     - Haz clic en **Continuar** para importar el esquema y los datos.

## Uso

Para ejecutar la aplicación, sigue estos pasos:

1. **Inicia el servidor**:

   ```bash
   npm run dev
   ```

2. **Accede a la aplicación**:

   - Abre tu navegador web y visita `http://localhost:3000`.
   - Utiliza la interfaz web para gestionar tus tareas.