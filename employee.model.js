import mongoose from "mongoose"


const empSchema=new mongoose.Schema({
    ID:{type:String},
    name:{type:String},
    salary:{type:Number},
    designation:{type:String},
    experience:{type:Number},
    phone:{type:Number},
    email:{type:String},
    profile:{type:String}

})

export default mongoose.model.employees||mongoose.model("employee",empSchema)