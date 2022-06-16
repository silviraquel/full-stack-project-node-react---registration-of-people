const express = require ('express');
const routes = require ('./routes');
const db = require ('./src/db');

const Modelperson = require ('./src/models/Modelperson')

const app = express();

app.use(express.json());
app.use(routes);

db.sync().then(()=> {
    app.listen(3000)
})
