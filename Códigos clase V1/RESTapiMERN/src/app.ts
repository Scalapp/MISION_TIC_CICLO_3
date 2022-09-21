import express, {Application} from "express";
import morgan from "morgan";
import rutas from "./routes/auth"


const app:Application = express();

app.set("port", 4000);

app.use(morgan("dev"));
app.use(express.json());

app.use(rutas);



export default app;