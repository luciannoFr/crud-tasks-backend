const express = require('express');
const router = express.Router(); // Crea un router express
const get_task=require('../controllers/get_Task');
const get_task_id=require('../controllers/get_Task_Id');
const post_task=require('../controllers/post_Task');
const put_task=require('../controllers/put_Task');
const del_task=require('../controllers/delete_Task');
router.get('/tasks', get_task); // obtener todas las tareas

router.get('/tasks/:id', get_task_id); // obtener tarea por id

router.post('/tasks', post_task); // crear nueva tarea

router.put('/tasks/:id', put_task); // actualizar datos de tarea

router.delete('/tasks/:id', del_task); // eliminar tarea


module.exports = router;
