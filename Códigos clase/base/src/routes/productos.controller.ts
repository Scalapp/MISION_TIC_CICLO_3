import { RequestHandler } from "express";
import Producto from "./Producto";

export const getProducto: RequestHandler = async (_req, _res) => {
    //res.json("trae un solo producto es necesario el id /id:")
   // console.log(_req.params);
  
   const productoEncontrado = await Producto.findById(_req.params.id)
   if(!productoEncontrado) return _res.status(204).json();
    return _res.json(productoEncontrado)
    console.log(productoEncontrado)
    
}
export const getProductos: RequestHandler = async (_req, _res) => {
   const productos = await Producto.find()
   return _res.json(productos)
   console.log(productos)
}


export const createProducto: RequestHandler =async (_req, _res) => {
    _res.json("crea un producto")
    const producto = new Producto(_req.body)
    console.log(producto)
    const savedProduct = await producto.save()
    _res.json(savedProduct)
}

export const deleteProducto: RequestHandler = async (_req, _res) => {
    //_res.json("borra el producto")
    const productoEncontrado = await Producto.findByIdAndDelete(_req.params.id)
   if(!productoEncontrado) return _res.status(204).json();
    return _res.json(productoEncontrado)
    console.log(productoEncontrado)
}

export const updateProducto: RequestHandler = async (_req, _res) => {
    //_res.json("actualiza el producto")
    const productoaActualizar = await Producto.findByIdAndUpdate(_req.params.id)
    console.log(productoaActualizar)
}

//export default getProductos;