import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const VisitSchema = sequelize.define('visitas',  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }, 
    nombre_del_visitante: {
        type: DataTypes.STRING

    },
    tipo_de_visitante: {
        type: DataTypes.STRING
    },
    visita_con: {
        type: DataTypes.STRING
    },
    fecha_y_hora: {
        type: DataTypes.DATE
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
})