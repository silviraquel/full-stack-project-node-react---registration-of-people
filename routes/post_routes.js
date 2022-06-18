import express from 'express';
import  addperson from '../src/controllers/postperson.js';

const postroutes = express.Router();

postroutes.post("/person",addperson);


export default postroutes;

