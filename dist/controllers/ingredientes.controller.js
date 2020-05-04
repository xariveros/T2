"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createIngrediente = createIngrediente;
exports.allIngredientes = allIngredientes;
exports.getIngredienteById = getIngredienteById;
exports.deleteIngredienteById = deleteIngredienteById;

var _ingredientes = _interopRequireDefault(require("../models/ingredientes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createIngrediente(_x, _x2) {
  return _createIngrediente.apply(this, arguments);
}

function _createIngrediente() {
  _createIngrediente = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, name, descripcion, new_ingrediente;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, descripcion = _req$body.descripcion;
            _context.next = 3;
            return _ingredientes["default"].create({
              name: name,
              descripcion: descripcion
            }, {
              fields: ["name", "descripcion"]
            });

          case 3:
            new_ingrediente = _context.sent;
            return _context.abrupt("return", res.json({
              message: "Se creo ingrediente",
              data: new_ingrediente
            }));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _createIngrediente.apply(this, arguments);
}

function allIngredientes(_x3, _x4) {
  return _allIngredientes.apply(this, arguments);
}

function _allIngredientes() {
  _allIngredientes = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var ingredientes;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _ingredientes["default"].findAll();

          case 2:
            ingredientes = _context2.sent;
            res.json({
              data: ingredientes
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _allIngredientes.apply(this, arguments);
}

function getIngredienteById(_x5, _x6) {
  return _getIngredienteById.apply(this, arguments);
}

function _getIngredienteById() {
  _getIngredienteById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, ingrediente;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return _ingredientes["default"].findOne({
              where: {
                id: id
              }
            });

          case 3:
            ingrediente = _context3.sent;
            res.json({
              data: ingrediente
            });

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getIngredienteById.apply(this, arguments);
}

function deleteIngredienteById(_x7, _x8) {
  return _deleteIngredienteById.apply(this, arguments);
}

function _deleteIngredienteById() {
  _deleteIngredienteById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, how_many_deleted;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.next = 3;
            return _ingredientes["default"].destroy({
              where: {
                id: id
              }
            });

          case 3:
            how_many_deleted = _context4.sent;
            res.json({
              message: "se elimino",
              data: how_many_deleted
            });

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _deleteIngredienteById.apply(this, arguments);
}