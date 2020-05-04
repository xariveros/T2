"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _burgers_ingredientes = _interopRequireDefault(require("./burgers_ingredientes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Burger = _database.sequelize.define("burgers", {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  name: {
    type: _sequelize["default"].TEXT
  },
  precio: {
    type: _sequelize["default"].INTEGER
  },
  descripcion: {
    type: _sequelize["default"].TEXT
  },
  imagen: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false
});

Burger.hasMany(_burgers_ingredientes["default"], {
  as: "burger_mid"
});

_burgers_ingredientes["default"].belongsTo(Burger, {
  foreignKey: "burger_id"
});

var _default = Burger;
exports["default"] = _default;