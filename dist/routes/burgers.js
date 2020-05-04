"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _burgers = require("../controllers/burgers.controller");

var router = (0, _express.Router)();
router.post("/", _burgers.createBurger);
router.get("/", _burgers.allBurgers);
router.get("/:id", _burgers.getBurgerById);
router["delete"]("/:id", _burgers.deleteBurgerById);
router.patch("/:id", _burgers.updateBurgerById);
var _default = router;
exports["default"] = _default;