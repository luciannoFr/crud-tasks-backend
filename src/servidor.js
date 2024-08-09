import express from 'express';

const app = express();

import router from '../routes/routes.js';

import bodyParser from 'body-parser';
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(router);

app.listen(3000, () => {
  console.log('El servidor está funcionando en el puerto 3000');
});
