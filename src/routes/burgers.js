import { Router } from "express";
import {
  createBurger,
  allBurgers,
  getBurgerById,
  deleteBurgerById,
  updateBurgerById,
} from "../controllers/burgers.controller";

const router = Router();

router.post("/", createBurger);
router.get("/", allBurgers);
router.get("/:id", getBurgerById);
router.delete("/:id", deleteBurgerById);
router.patch("/:id", updateBurgerById);

export default router;
