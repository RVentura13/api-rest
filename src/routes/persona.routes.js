import { Router } from "express";
import { methods as personaController } from "./../controllers/persona.controller";

const router = Router();

router.get("/", personaController.getPersonas);
router.get("/:id", personaController.getPersona);
router.post("/", personaController.addPersona);
router.put("/:id", personaController.updatePersona);
router.delete("/:id", personaController.deletePersona);

export default router;
