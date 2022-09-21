import { Schema, model } from "mongoose";

const productoSchema =new Schema({
    nombre: {
        type:String,
        required:false,
        trim:true
    },
    id: {
        type:String,
        required:true,
        trim:true
    },
    descripcion: {
        type:String,
        required:false,
        trim:true
    },
    precio:{
        type:Number,
        required:false,
        trim:true
    },
},{
    versionKey: false,
    timestamps: true,
})

export default model('Producto', productoSchema);