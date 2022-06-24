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

Modelperson.hasOne(Modeladdress, {
    foreignKey: 'person_id'
});

export default {Modeladdress, Modelperson};

