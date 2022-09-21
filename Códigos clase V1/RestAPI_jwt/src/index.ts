import app from './app';
import dotenv from "dotenv";
import "./database";

dotenv.config();

console.log(process.env.TESTING)

function main() {
    app.listen(app.get("port"));
    console.log("Estoy escuchando desde el puerto ", app.get("port"))
}

main();
