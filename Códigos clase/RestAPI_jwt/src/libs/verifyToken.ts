import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"

export const TokenValidation =(req:Request, res:Response, next:NextFunction) =>{
    const token = req.header("token_de_auto");
    if (!token) return res.status(401).json("Acceso denegado");

    const payload = jwt.verify(token, process.env.TOKEN_SECRET || "noToken")
    console.log(payload)
    next();

}