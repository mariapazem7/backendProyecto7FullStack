import express from 'express';
import cors from 'cors';

import { envs } from './config/envs.config.js';
import { dbConnect } from './config/db.config.js';

import  apiRouter from './routers/index.router.js';
import { errorHandler } from './middlewares/errorhandler.js';



const app = express();

dbConnect({updateDocs: true});

app.use(cors());

app.use(express.json());
app.use(express.urlencoded( { extended: true}));

app.use('/uploads', express.static('public/uploads'));

app.use('/api/v1', apiRouter);


app.use(errorHandler);

app.listen(envs.port, () => {
    console.log(`Servidor corriendo en el puerto ${envs.port}`); 
});