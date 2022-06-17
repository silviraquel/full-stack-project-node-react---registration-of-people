import express from 'express';
import  findAll from '../src/controllers/getperson.js';

const routes = express.Router();

routes.get("/person",findAll);


export default routes;

