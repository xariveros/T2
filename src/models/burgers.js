import Sequelize from "sequelize";
import { sequelize } from "../database/database";

import Burger_Ingrediente from "./burgers_ingredientes";

const Burger = sequelize.define(
  "burgers",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: {
      type: Sequelize.TEXT,
    },
    precio: {
      type: Sequelize.INTEGER,
    },
    descripcion: {
      type: Sequelize.TEXT,
    },
    imagen: {
      type: Sequelize.TEXT,
    },
  },
  { timestamps: false }
);

Burger.hasMany(Burger_Ingrediente, { as: "burger_mid" });
Burger_Ingrediente.belongsTo(Burger, { foreignKey: "burger_id" });

export default Burger;
