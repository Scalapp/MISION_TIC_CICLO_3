import { Router } from "express";
import * as productoCtrl from "./productos.controller"

const router = Router();

//router.get("/productos",(req,res)=>res.json("Estos son los productos"))
router.get("/producto/:id",productoCtrl.getProducto);

router.get("/productos",productoCtrl.getProductos);

router.post("/productos",productoCtrl.createProducto);

router.delete("/productos/:id",productoCtrl.deleteProducto);

router.put("/productos/:id",productoCtrl.updateProducto);



export default router   //se exporta para usar en app