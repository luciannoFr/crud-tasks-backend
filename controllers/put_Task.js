const connection = require('../databases/connection/crear_conexion_db')

async function put_Task(req, res) {
    const id = req.params.id;
    const { title, description, isComplete } = req.body;
  
    if (!title || !description || !isComplete) {
      res.status(400).send('Datos insuficientes para la carga de datos'); 
      return; 
    }
  
    const sql = `UPDATE tasks SET title = ?, description = ?, isComplete = ? WHERE id = ?`;
    const update = [title, description, isComplete, id]; 
  
    connection.query(sql, update, (error, results) => {
      if (error) {
        console.error('Error al actualizar la tarea:', error); 
        res.status(500).send('Error al actualizar la tarea');
        return; 
      }
  
      if (results.affectedRows === 0) {
        res.status(404).send('Tarea no encontrada'); 
        return; 
      }
      res.json({ message: 'Tarea actualizada correctamente' });
    });
  }
  
  module.exports = put_Task;