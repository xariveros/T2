import { Router } from "express";
import {
  createIngrediente,
  allIngredientes,
  getIngredienteById,
  deleteIngredienteById,
} from "../controllers/ingredientes.controller";
const router = Router();

router.post("/", createIngrediente);
router.get("/", allIngredientes);
router.get("/:id", getIngredienteById);
router.delete("/:id", deleteIngredienteById);

export default router;
