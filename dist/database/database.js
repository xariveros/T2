"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sequelize = new _sequelize["default"]("dci6c1v50b470u", "yuejlphhnndqlw", "518df9b6b3c33c614b7e27c4d3c4cd1004388b843fe03f84232c59884b4c3804", {
  host: "ec2-50-17-21-170.compute-1.amazonaws.com",
  dialect: "postgres",
  port: 5432,
  pool: {
    max: 5,
    min: 0,
    require: 30000,
    idle: 10000
  } //logging: false,

});
exports.sequelize = sequelize;