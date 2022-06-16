import express from 'express';
import  { findAll, addperson, findperson, updateperson, deleteperson } from './src/controllers/Controllerperson.js';

export default routes = express.Router();

routes.get("/person", Controllerperson.findAll);
routes.post("/person", Controllerperson.addClient);
routes.get("/person/:id", Controllerperson.findClient);
routes.put("/person/:id", Controllerperson.updateClient);
routes.delete("/person/:id", Controllerperson.deleteClient);


