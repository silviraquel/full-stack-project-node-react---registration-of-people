import express from 'express';
import  findPerson from '../src/controllers/getidperson.js';

const routesid = express.Router();

routesid.get("/person/:id",findPerson);


export default routesid;

