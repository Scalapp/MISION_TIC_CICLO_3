import { Schema, model, Document } from "mongoose";

export interface UserInterf extends Document{
    username:string;
    email:string;
    password:string;

}


const userSchema =new Schema({

    username:{
        type: String,
        unique:true,
        required:true,
        min:8,
        lowercase:true
    },

    email:{
        type:String,
        unique:true, 
        required:true

    },

    password:{
        type:String,
        required:true

    }

})

export default model("user", userSchema);