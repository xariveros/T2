"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _ingredientes = require("../controllers/ingredientes.controller");

var router = (0, _express.Router)();
router.post("/", _ingredientes.createIngrediente);
router.get("/", _ingredientes.allIngredientes);
router.get("/:id", _ingredientes.getIngredienteById);
router["delete"]("/:id", _ingredientes.deleteIngredienteById);
var _default = router;
exports["default"] = _default;