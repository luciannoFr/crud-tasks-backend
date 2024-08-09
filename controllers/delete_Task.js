import {connection} from '../databases/connection/crear_conexion_db.js';

async function del_Task(req, res) {
    const id = req.params.id; 
  
    const query = `DELETE FROM tasks WHERE id = ?`; 
    const values = [id]; 
  
    connection.query(query, values, (error, results) => {
      if (error) {
        console.error('Error al eliminar tarea:', error); 
        res.status(500).send('Error al eliminar tarea'); 
        return; 
      }
  
      if (results.affectedRows === 0) {
        res.status(404).send('tarea no encontrada'); 
        return; 
      }
  
      res.json({ message: 'tarea eliminada correctamente' }); 
    });
  }  

export default del_Task;