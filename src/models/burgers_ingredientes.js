import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Burger_Ingrediente = sequelize.define(
  "burgers_ingredientes",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    burger_id: {
      type: Sequelize.INTEGER,
    },
    ingrediente_id: {
      type: Sequelize.INTEGER,
    },
  },
  { timestamps: false }
);

//Burger.belongsToMany(Ingrediente, { through: "Burger_Ingrediente" });
//Ingrediente.belongsToMany(Burger, { through: "Burger_Ingrediente" });

export default Burger_Ingrediente;
