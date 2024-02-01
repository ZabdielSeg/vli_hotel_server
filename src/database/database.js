import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('postgres', 'zabdielsegura', "", {
    host: "localhost",
    dialect: "postgres"
});