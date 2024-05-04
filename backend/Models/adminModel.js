const mongoose=require("mongoose")
const adminChema=new mongoose.Schema({
    name:{type:String,minlength:3,maxlength:30 },
    email:{type: String,require:true,minlength:3,maxlength:200,unique:true,trim:true },
    password:{type: String,require:true,minlength:3,maxlength:1024},
},{
    timestamps:true,
})
const adminModel=mongoose.model("Admin",adminChema)
module.exports=adminModel