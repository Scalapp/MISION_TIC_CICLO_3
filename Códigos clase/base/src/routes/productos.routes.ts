import { Router } from "express";
import * as productoCtrl from "../controlers/productos.controller"

const router = Router();

//router.get("/productos",(req,res)=>res.json("Estos son los productos"))
router.get("/producto/:id",productoCtrl.getProducto);

router.get("/productos",productoCtrl.getProductos);

router.post("/productos",productoCtrl.createProducto);

router.delete("/productos/:id",productoCtrl.deleteProducto);

router.put("/productos/:id",productoCtrl.updateProducto);

router.get("/hola",(req, res) =>{res.send("Hola desde hola")})

export default router   //se exporta para usar en app