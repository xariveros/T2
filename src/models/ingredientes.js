import Sequelize from "sequelize";
import { sequelize } from "../database/database";

import Burger_Ingrediente from "./burgers_ingredientes";
const Ingrediente = sequelize.define(
  "ingredientes",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: {
      type: Sequelize.TEXT,
    },
    descripcion: {
      type: Sequelize.TEXT,
    },
  },
  { timestamps: false }
);

Ingrediente.hasMany(Burger_Ingrediente, { as: "ingrediente_mid" });
Burger_Ingrediente.belongsTo(Ingrediente, { foreignKey: "ingrediente_id" });

export default Ingrediente;
