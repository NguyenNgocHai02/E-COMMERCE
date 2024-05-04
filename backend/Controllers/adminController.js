const adminModel=require("../Models/userModel")
const bcrypt =require("bcrypt")
//----Register
const registerAdmin=async(req,res)=>{
   
    try {
        const {name,email,password}=req.body;
        let user=await adminModel.findOne({email});
        if(user)
        return res.status(400).json("Email đã tồn tại")
        if(!email||!password||!name)
        return res.status(400).json("Thiếu thông tin");
        user=new adminModel({email,password,name})
        const salt =await bcrypt.genSalt(10)
        user.password=await bcrypt.hash(user.password,salt)
        await user.save()
        
        res.status(200).json({name:user.name,email:user.email})
    } catch (error) {
        res.status(500).json(error)
    }
}
//----Login
const loginAdmin=async(req,res)=>{
    const {email,password}=req.body
    try{
       
        let user= await adminModel.findOne({email});
        if(!user) return res.status(400).json("Invalid email or password...");
        const isValidpassword=await bcrypt.compareSync(password,user.password);
        if(!isValidpassword) return res.status(400).json("Invalid email or password...")
        res.status(200).json({name:user.name,email:user.email})
    }catch(err)
    {
        res.status(500).json(err)
        console.log(err);
    }
}
module.exports={registerAdmin,loginAdmin}