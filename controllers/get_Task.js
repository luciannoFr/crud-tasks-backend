import {connection} from '../databases/connection/crear_conexion_db.js';

async function Alltareas(req, res) {
  const sql = 'SELECT * FROM tasks'; 
  console.log('Ejecutando consulta para obtener todas las tareas');

  connection.query(sql, (error, results) => {
    if (error) {
      console.error('Error al obtener tareas:', error); 
      res.status(500).send('Error al obtener las tareas'); 
      return; 
    }

    console.log('tareas obtenidos:', results); 
    res.json(results); 
  });
}

export default Alltareas;