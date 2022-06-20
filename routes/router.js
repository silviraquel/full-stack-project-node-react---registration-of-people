import express from 'express';
import controllersperson from '../src/controllers/controllersperson.js';
import findAll from '../src/controllers/controllersperson.js';
import findPerson from '../src/controllers/controllersperson.js';
import addPerson from '../src/controllers/controllersperson.js';
import updateperson from '../src/controllers/controllersperson.js';




const routes = express.Router();

routes.get("/person",controllersperson.findAll);
routes.get("/person/:id",controllersperson.findPerson);
routes.post("/person",controllersperson.addPerson);
routes.put("/person/:id",controllersperson.updateperson);



export default routes;

