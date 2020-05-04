import { Router } from "express";
import {
  createBurger,
  allBurgers,
  getBurgerById,
  deleteBurgerById,
  updateBurgerById,
  addIngredientToBurger,
} from "../controllers/burgers.controller";

const router = Router();

router.post("/", createBurger);
router.get("/", allBurgers);
router.get("/:id", getBurgerById);
router.delete("/:id", deleteBurgerById);
router.patch("/:id", updateBurgerById);
router.put("/:id1/ingrediente/:id2", addIngredientToBurger);

export default router;
