import mongoose ,{ConnectionOptions} from 'mongoose'

import config from "./config";

(async () =>{
try{
    const mongooseOptions: ConnectionOptions ={
   useUnifiedTopology:true,
    useNewUrlParser:true,
    user:config.MONGO_USER,
    pass:config.MONGO_PASSWORD
    }

    const db =await mongoose.connect("mongodb://localhost/mitienda",mongooseOptions);
    console.log("La base de datos está conectada a", db.connection.name)
} catch(error){
    console.error();
    
}
})()