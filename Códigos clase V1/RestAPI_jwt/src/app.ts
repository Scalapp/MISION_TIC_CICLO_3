import express, {Application} from "express"
import misrutas from "./routes/auth"
import morgan from "morgan";

const app: Application = express();

//configuración
app.set("port", 3000);

//middlewares 
app.use(morgan("dev"));
app.use(express.json())

// routes 
app.use(misrutas)


export default app; 