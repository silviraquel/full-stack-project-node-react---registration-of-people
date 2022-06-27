import { DataTypes } from "sequelize";
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



export default Modelperson;

