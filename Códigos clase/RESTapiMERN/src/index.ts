//console.log("hola mundo desde: index.ts realiza el cambio a js")
import app from "./app";
import "./database";

function principal(){

    app.listen(app.get("port"));
    console.log("Hola estoy escuchando desde el puerto:",app.get("port"))
}

principal();