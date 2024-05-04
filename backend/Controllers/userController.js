const userModel=require('../Models/userModel')
const bcrypt =require("bcrypt")

//----Register
const registerUser=async(req,res)=>{
   
    try {
        const {name,email,password}=req.body;
        let user=await userModel.findOne({email});
        if(user)
        return res.status(400).json("Email đã tồn tại")
        if(!email||!password||!name)
        return res.status(400).json("Thiếu thông tin");
        user=new userModel({email,password,name})
        const salt =await bcrypt.genSalt(10)
        user.password=await bcrypt.hash(user.password,salt)
        await user.save()
        
        
    } catch (error) {
        res.status(500).json(error)
    }
}
//----Login
const loginUser=async(req,res)=>{
    const {email,password}=req.body
    try{
       
        let user= await userModel.findOne({email});
        if(!user) return res.status(400).json("Invalid email or password...");
        const isValidpassword=await bcrypt.compareSync(password,user.password);
        if(!isValidpassword) return res.status(400).json("Invalid email or password...")
    }catch(err)
    {
        res.status(500).json(err)
        console.log(err);
    }
}