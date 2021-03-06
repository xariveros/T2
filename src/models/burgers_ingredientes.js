import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Burger_Ingrediente = sequelize.define(
  "burgers_ingredientes",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    burgerId: {
      type: Sequelize.INTEGER,
    },
    ingredienteId: {
      type: Sequelize.INTEGER,
    },
    path: {
      type: Sequelize.TEXT,
    },
  },
  { timestamps: false }
);

//Burger.belongsToMany(Ingrediente, { through: "Burger_Ingrediente" });
//Ingrediente.belongsToMany(Burger, { through: "Burger_Ingrediente" });

export default Burger_Ingrediente;
