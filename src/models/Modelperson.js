import { DataTypes } from "sequelize";
import Modeladdress from "./Modeladdress.js";
import db from '../db.js';

const Modelperson = db.define( 'people', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:  true,
        allowNull: false,
    },

    name: {
        type: DataTypes.STRING,
    },

    birthday: {
        type: DataTypes.DATE,
    },
    
    cpf: {
        type: DataTypes.STRING,
    },

})

Modelperson.hasOne(Modeladdress, {
    foreignKey: 'person_id',
});

export default Modelperson;

