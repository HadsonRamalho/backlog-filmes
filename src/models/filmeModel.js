import { DataTypes } from "sequelize";
import sequelize from "../config/dbCOnfig.js";

const filmeModel = sequelize.define('Filmes',{
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});