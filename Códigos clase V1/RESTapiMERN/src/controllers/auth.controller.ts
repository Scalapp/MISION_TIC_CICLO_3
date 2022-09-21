import { Request, Response } from "express"
import User,{ UserInterf }  from "../models/User"
import jwt from "jsonwebtoken"

export const SaveNewUser=async(req:Request,res:Response)=>{
    console.log(req.body)
    const user:UserInterf=new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    const usuarioguardado= await user.save();
    console.log("Creando un nuevo token");
    const token:string =jwt.sign({_id: usuarioguardado}, process.env.TOKEN_SECRET || "noToken");
    res.json(token);
    //res.send("esta es la página de SaveNewUser, el usuario guardado es:"+ usuarioguardado)

}
export const login=(req:Request,res:Response)=>{
    res.send("esta es la página de Login")
}
export const productos=(req:Request,res:Response)=>{
    res.send("esta es la página de Productos")
}
export const usuarios=(req:Request,res:Response)=>{
    res.send("esta es la página de Usuarios")
}