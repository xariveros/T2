"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBurger = createBurger;
exports.allBurgers = allBurgers;
exports.getBurgerById = getBurgerById;
exports.deleteBurgerById = deleteBurgerById;
exports.updateBurgerById = updateBurgerById;

var _burgers = _interopRequireDefault(require("../models/burgers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//post burger
function createBurger(_x, _x2) {
  return _createBurger.apply(this, arguments);
} //get burger


function _createBurger() {
  _createBurger = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, name, precio, descripcion, imagen, new_burger;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, precio = _req$body.precio, descripcion = _req$body.descripcion, imagen = _req$body.imagen;
            console.log(req.body);
            _context.prev = 2;
            _context.next = 5;
            return _burgers["default"].create({
              name: name,
              precio: precio,
              descripcion: descripcion,
              imagen: imagen
            }, {
              fields: ["name", "precio", "descripcion", "imagen"]
            });

          case 5:
            new_burger = _context.sent;

            if (!new_burger) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", res.json({
              message: "Se creo hamburguesa",
              data: new_burger
            }));

          case 8:
            _context.next = 14;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](2);
            console.log(_context.t0);
            res.status(500).json({
              message: "algo salio mal"
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 10]]);
  }));
  return _createBurger.apply(this, arguments);
}

function allBurgers(_x3, _x4) {
  return _allBurgers.apply(this, arguments);
} //hamburguesa por id


function _allBurgers() {
  _allBurgers = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var all_burgers;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _burgers["default"].findAll();

          case 2:
            all_burgers = _context2.sent;
            res.json({
              data: all_burgers
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _allBurgers.apply(this, arguments);
}

function getBurgerById(_x5, _x6) {
  return _getBurgerById.apply(this, arguments);
} //borrar hamburguesa por id


function _getBurgerById() {
  _getBurgerById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, hamburguesa;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return _burgers["default"].findOne({
              where: {
                id: id
              }
            });

          case 3:
            hamburguesa = _context3.sent;
            res.json({
              data: hamburguesa
            });

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getBurgerById.apply(this, arguments);
}

function deleteBurgerById(_x7, _x8) {
  return _deleteBurgerById.apply(this, arguments);
}

function _deleteBurgerById() {
  _deleteBurgerById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, how_many_deleted;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.next = 3;
            return _burgers["default"].destroy({
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
  return _deleteBurgerById.apply(this, arguments);
}

function updateBurgerById(_x9, _x10) {
  return _updateBurgerById.apply(this, arguments);
}

function _updateBurgerById() {
  _updateBurgerById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, _req$body2, name, precio, descripcion, imagen, burger;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, name = _req$body2.name, precio = _req$body2.precio, descripcion = _req$body2.descripcion, imagen = _req$body2.imagen;
            _context5.next = 4;
            return _burgers["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            burger = _context5.sent;
            _context5.next = 7;
            return burger.update({
              name: name,
              precio: precio,
              descripcion: descripcion,
              imagen: imagen
            });

          case 7:
            res.json({
              message: "se actualizo",
              data: burger
            });

          case 8:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _updateBurgerById.apply(this, arguments);
}