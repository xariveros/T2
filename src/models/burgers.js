import Sequelize from "sequelize";
import { sequelize } from "../database/database";

import Burger_Ingrediente from "./burgers_ingredientes";

const Burger = sequelize.define(
  "burgers",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    nombre: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    precio: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    descripcion: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    imagen: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  },
  { timestamps: false }
);

Burger.hasMany(Burger_Ingrediente, { as: "ingredientes" });
Burger_Ingrediente.belongsTo(Burger, { foreignKey: "burgerId" });

export default Burger;
