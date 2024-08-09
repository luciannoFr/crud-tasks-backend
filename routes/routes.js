import express  from 'express';
const router = express.Router(); // Crea un router express
import get_task from '../controllers/get_Task.js';
import get_task_id from '../controllers/get_Task_Id.js';
import post_task from '../controllers/post_Task.js';
import put_task from '../controllers/put_Task.js';
import del_Task from '../controllers/delete_Task.js';
router.get('/tasks', get_task); // obtener todas las tareas

router.get('/tasks/:id', get_task_id); // obtener tarea por id

router.post('/tasks', post_task); // crear nueva tarea

router.put('/tasks/:id', put_task); // actualizar datos de tarea

router.delete('/tasks/:id', del_Task); // eliminar tarea


export default router;