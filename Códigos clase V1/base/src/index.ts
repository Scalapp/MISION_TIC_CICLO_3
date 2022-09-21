import app from "./app"  //importando el modulo llamado app
import "./database"  //esto ejecuta todo el modulo llamado database

const port =4000

app.listen(port, ()=>{
    console.log("Estoy escuchando desde el puerto ",port)
})


