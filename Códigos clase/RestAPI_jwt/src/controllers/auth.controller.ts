import { Request, Response } from "express"
import User, { UserInterf } from "../models/User"
import jwt from "jsonwebtoken";


export const SaveNewUser = async (req: Request, res: Response) => {
    console.log(req.body)
    // res.send("esta es una respuesta del Save ")
    console.log("Creando un nuevo usuario")
    const user: UserInterf = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    user.password = await user.encryptPassword(user.password);
    const usuarioguardado = await user.save();
    console.log("el usuario guardado es: ", usuarioguardado)
    //res.send("el usuario guardado es: "+usuarioguardado)

    console.log("Creando un nuevo token")
    const token: string = jwt.sign({ _id: usuarioguardado }, process.env.TOKEN_SECRET || "noToken");
    //res.json(token);
    res.header("token_de_auto", token).json(usuarioguardado)

}

export const login = async (req: Request, res: Response) => {
    
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json("Usuario y/o contraseña invalidos");

    const pass: boolean = await user.validatePassword(req.body.password);
    if (!pass) return res.status(400).json("Usuario y/o contraseña invalidos");

   const token: string = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET || "noToken",{
    expiresIn: 60 * 60 * 24
   })
   res.header("auth-token", token).json(user)
    res.send("esta es una respuesta de la página de inicio ");

}

export const productos = (req: Request, res: Response) => {
   // console.log(req.header("token_de_auto"))
   // res.send("esta es una respuesta de la página productos ")

   if(req.header("token_de_auto")){
    res.send("esta es una respuesta de la página productos ")
   }else {
    res.send("error")
   }

}