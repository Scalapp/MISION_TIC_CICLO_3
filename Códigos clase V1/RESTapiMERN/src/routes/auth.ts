import { Router } from "express";
import {SaveNewUser, login, productos,usuarios} from "../controllers/auth.controller";

const router: Router =Router();

router.get("/unarutaaproductos", (req, res) =>{
    res.send("Hola desde el enrrutador")
})

router.post("/Ingreso",SaveNewUser);
router.post("/login",login);
router.post("/productos",productos);
router.post("/usuarios",usuarios);

export default router;