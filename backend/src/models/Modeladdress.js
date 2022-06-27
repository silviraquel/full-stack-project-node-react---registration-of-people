import { DataTypes } from "sequelize";
import db from '../db.js';


const Modeladdress = db.define( 'address', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    city: {
        type: DataTypes.STRING,
    },

    cep: {
        type: DataTypes.STRING,
    },
    
    uf: {
        type: DataTypes.STRING,
    },

});


export default Modeladdress;