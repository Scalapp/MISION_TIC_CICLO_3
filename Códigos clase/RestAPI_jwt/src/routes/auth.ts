import { Router } from "express";
import { SaveNewUser, login, productos } from "../controllers/auth.controller";
import {TokenValidation} from "../libs/verifyToken"

const router: Router = Router();

router.get("/", (req, res) => {
    // console.log("Hola mundo desde el enrrutador")
    res.send("hola mundo desde el enrrutador en ruta /")
})

router.post("/NewUser", SaveNewUser)
router.post("/login", login)
router.post("/productos",productos)
router.get("/productos",TokenValidation, productos)


export default router;