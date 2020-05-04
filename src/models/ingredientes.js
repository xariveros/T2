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
    nombre: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    descripcion: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  },
  { timestamps: false }
);

Ingrediente.hasMany(Burger_Ingrediente, { as: "ingrediente_mid" });
Burger_Ingrediente.belongsTo(Ingrediente, { foreignKey: "ingrediente_id" });

export default Ingrediente;
