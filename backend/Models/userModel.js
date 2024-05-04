const mongoose=require("mongoose")
const userChema=new mongoose.Schema({
    name:{type:String,minlength:3,maxlength:30 },
    email:{type: String,require:true,minlength:3,maxlength:200,unique:true },
    password:{type: String,require:true,minlength:3,maxlength:1024},
    address:{type:String},
    phone:{type:String}
},{
    timestamps:true,
})
const userModel=mongoose.model("User",userChema)
module.exports=userModel