import Sequelize from "sequelize";

export const sequelize = new Sequelize("postgres", "postgres", "Garymedel123", {
  host: "localhost",
  dialect: "postgres",
  port: 5000,
  pool: {
    max: 5,
    min: 0,
    require: 30000,
    idle: 10000,
  },
  //logging: false,
});
