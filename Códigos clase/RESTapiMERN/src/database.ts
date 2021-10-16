import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/mytienda",{})
    .then(db =>console.log("La base de datos está conectada a mytienda"))
    .catch(err=>console.log(err))