import express from 'express';
import get_routes from './routes/get_routes.js';
import getid_routes from './routes/getid_routes.js';

import db from './src/db.js';

import Modelperson from './src/models/Modelperson.js'

const app = express();

app.use(express.json());
app.use(get_routes);
app.use(getid_routes);


app.get("/", (req, res) => {
    return res.json({ name: "Página inicial" });
  });
  

db.sync().then(()=> {
    app.listen(3000)
})
