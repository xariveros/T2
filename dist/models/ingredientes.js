"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _burgers_ingredientes = _interopRequireDefault(require("./burgers_ingredientes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Ingrediente = _database.sequelize.define("ingredientes", {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  name: {
    type: _sequelize["default"].TEXT
  },
  descripcion: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false
});

Ingrediente.hasMany(_burgers_ingredientes["default"], {
  as: "ingrediente_mid"
});

_burgers_ingredientes["default"].belongsTo(Ingrediente, {
  foreignKey: "ingrediente_id"
});

var _default = Ingrediente;
exports["default"] = _default;