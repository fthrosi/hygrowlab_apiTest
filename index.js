import express from 'express';
import dotenv from 'dotenv';
import notesRouter from './notesRouter.js';
dotenv.config();
const app = express();
const port = process.env.APP_PORT
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/notes', notesRouter);

app.listen(port, () => {
    console.log('Server is running');
});