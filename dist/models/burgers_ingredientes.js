"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Burger_Ingrediente = _database.sequelize.define("burgers_ingredientes", {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  burger_id: {
    type: _sequelize["default"].INTEGER
  },
  ingrediente_id: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false
}); //Burger.belongsToMany(Ingrediente, { through: "Burger_Ingrediente" });
//Ingrediente.belongsToMany(Burger, { through: "Burger_Ingrediente" });


var _default = Burger_Ingrediente;
exports["default"] = _default;