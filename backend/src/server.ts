import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

// Rota 
// recurso = usuario
// Método HTTP = GET, POST, PUT, DELETE
// Parâmetros

// GET = buscar uma informacao (lista, item)
// POST = criando uma informacao
// PUT = editando uma informacao
// DELETE = deletando uma informacao

// Query params: https://localhost:3333/users?search=dilenio&page=2
// Route params: http://localhost:3333/users/1 (identificar um recurso)
// Body: http://localhost:3333/users (identificar um recurso)

// app.post('/users/:id', (request, response) => {
//   console.log(request.query);
//   console.log(request.params);
//   console.log(request.body);
//   return response.json({ message: 'hello world' });
// });

// Driver nativo, Query builder, ORM
// Object Relational Mapping

app.listen(3333);
