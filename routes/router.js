import express from 'express';
import controllersperson from '../src/controllers/controllersperson.js';

const routes = express.Router();

routes.get("/person",controllersperson.findAll);
routes.get("/person/:id",controllersperson.findPerson);
routes.post("/person",controllersperson.addPerson);
routes.put("/person/:id",controllersperson.updateperson);
routes.delete("/person/:id",controllersperson.deleteperson);




export default routes;
