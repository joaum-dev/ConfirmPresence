import * as convidadosControllers from "../controllers/convidadosControllers.js";
import Router from "express";

const router = Router();

router.post("/convidados", convidadosControllers.CREATE);
router.get("/convidados", convidadosControllers.listAll);
router.delete("/convidados/:id", convidadosControllers.deletar);
router.get("/convidados/search", convidadosControllers.search);

export default router;
