const connection= require('../databases/connection/crear_conexion_db.js')

async function tareaPorId(req, res) {
    const id = req.params.id; 
    console.log('Obteniendo tarea con ID:', id); 
  
    const query = `SELECT * FROM tasks WHERE id = ${id}`; 

    connection.query(query, (error, results) => {
      if (error) {
        console.error('Error al obtener tarea:', error); 
        res.status(500).send('Error al obtener tarea'); 
        return; 
      }
  
      if (!results.length) {
        console.log('tarea no encontrada con ID:', id); 
        res.status(404).send('tarea no encontrada'); 
        return; 
      }
  
      console.log('tarea encontrada:', results[0]); 
      res.json(results[0]); 
    });
  }
  
  module.exports = tareaPorId;