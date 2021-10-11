import { RequestHandler } from "express";
import Producto from "../models/Producto";

export const getProducto: RequestHandler = async (_req, _res) => {
    //res.json("trae un solo producto es necesario el id /id:")
    // console.log(_req.params);
    try {
        const productoEncontrado = await Producto.findById(_req.params.id)
        if (!productoEncontrado) return _res.status(204).json();
        return _res.json(productoEncontrado)
        console.log(productoEncontrado)
    } catch (error) {
        _res.json(error)
    }

}
export const getProductos: RequestHandler = async (_req, _res) => {
    try {
        const productos = await Producto.find()
        return _res.json(productos)
        console.log(productos)
    } catch (error) {
        _res.json(error)
    }
}

export const createProducto: RequestHandler = async (_req, _res) => {
    try {
        _res.json("crea un producto")
        const producto = new Producto(_req.body)
        console.log(producto)
        const savedProduct = await producto.save()
        _res.json(savedProduct)
    } catch (error) {
        _res.json(error)
    }
}

export const deleteProducto: RequestHandler = async (_req, _res) => {
    //_res.json("borra el producto")
    try {
        const productoEncontrado = await Producto.findByIdAndDelete(_req.params.id)
        if (!productoEncontrado) return _res.status(204).json();
        return _res.json(productoEncontrado)
        console.log(productoEncontrado)
    } catch (error) {
        _res.json(error)
    }
}


export const updateProducto: RequestHandler = async (_req, _res) => {
    //_res.json("actualiza el producto")
    try {
        const productoaActualizar = await Producto.findByIdAndUpdate(_req.params.id, _req.body)
        if (!productoaActualizar) return _res.status(204).json();
        console.log(productoaActualizar)
    } catch (error) {
        _res.json(error)
    }
}

//export default getProductos;