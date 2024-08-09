import {connection} from '../databases/connection/crear_conexion_db.js';

// Función para verificar si ya existe una tarea con el mismo título
const verificarTitle = async (title) => {
    const sqltitle = 'SELECT * FROM tasks WHERE title = ?';
    const select = [title];
  
    return new Promise((resolve, reject) => {
        connection.query(sqltitle, select, (error, results) => {
            if (error) {
                console.error('Error al verificar tarea:', error);
                return reject(error);
            }
            resolve(results.length > 0 ? 0 : 1);  // Retorna 0 si existe, 1 si no existe
        });
    });
};

// Función para agregar una tarea
const addTarea = async (req, res) => {
    const { title, description, isComplete } = req.body;
     
    if (!title || !description || !isComplete) {
        res.status(400).send('Información insuficiente para la carga'); 
        return; 
    }

    // Verificar si los valores son strings
    if (typeof title !== 'string' || typeof description !== 'string') {
        res.status(400).send('Los valores de title y description deben ser strings');
        return;
    }

    // Verificar si el tamaño del título es válido
    if (title.length <= 0 || title.length >= 255) {
        res.status(400).send('El título debe contener hasta máximo 255 caracteres y no debe estar vacío');
        return;
    }

    // Verificar si la descripción está vacía
    if (description.length === 0) {
        res.status(400).send('La descripción no puede estar vacía');
        return;
    }

    // Consultar si hay alguna tarea con el mismo nombre
    try {
        const resultado = await verificarTitle(title);
        if (resultado === 0) {
            res.status(400).send('Ya hay una tarea con el mismo nombre');
            return;  // Salir de la función si hay error
        }

        // Insertar la nueva tarea
        const sql = 'INSERT INTO tasks (title, description, isComplete) VALUES (?, ?, ?)';
        const insert = [title, description, isComplete]; 
  
        connection.query(sql, insert, (error, results) => {
            if (error) {
                console.error('Error al crear tarea:', error); 
                res.status(500).send('Error al crear tarea'); 
                return; 
            }
            res.json({ message: 'Tarea creada con éxito' });
        });
    } catch (error) {
        res.status(500).send('Error al verificar la tarea');
    }
};

export default addTarea;
