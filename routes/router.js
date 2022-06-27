import express from 'express';
import controllersperson from '../src/controllers/controllersperson.js';
import controllersaddress from '../src/controllers/controllersaddress.js';



const routes = express.Router();

routes.get("/person",controllersperson.findAll);
routes.get("/person/:id",controllersperson.findPerson);
routes.post("/person",controllersperson.addPerson);
routes.put("/person/:id",controllersperson.updateperson);
routes.delete("/person/:id",controllersperson.deleteperson);
routes.get("/address",controllersaddress.findAlladdress);
routes.get("/address/:id",controllersaddress.findAddress);
routes.post("/address",controllersaddress.addAddress);
routes.put("/address/:id",controllersaddress.updateAddress);








export default routes;

