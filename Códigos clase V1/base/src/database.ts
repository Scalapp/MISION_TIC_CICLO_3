import mongoose from "mongoose";

(async () => {
    try {

        const db = await mongoose.connect("mongodb://localhost/mytienda");
        console.log("La base de datos está conectada a:", db.connection.name)

    } catch (error) {
        console.log("error desde la base revisar database.ts");
        console.error();
    }

}
)()   //ejecuta automáticamente  ()()