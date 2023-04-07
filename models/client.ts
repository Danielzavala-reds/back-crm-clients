import { DataTypes } from "sequelize";
import db from "../db/conecction";

const Cliente = db.define('Cliente',{

    name: {
        type: DataTypes.STRING
    },
    number: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    placeWork: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    
});

export default Cliente;