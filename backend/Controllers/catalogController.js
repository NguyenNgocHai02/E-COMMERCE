const catalogModel=require("../Models/catalogModel")

//-----getcatalog
const getCatalogByIdParent=async(req,res)=>{
    try {
        const response=await catalogModel.find({parent_id:req.params.id})
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json("Lỗi hệ thống!");
    }
}
//-----create catalog
const createCatalog=async(req,res)=>{
    try {
        const newCatalog= new catalogModel(req.body)
        await newCatalog.save(newCatalog);
        res.status(200).json(newCatalog)
    } catch (error) {
        res.status(500).json("Lỗi hệ thống!");
    }
}
const getall=async(req,res)=>{
    try {
        const response=await catalogModel.find()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json("Lỗi hệ thống!");
    }
}
const del=async(req,res)=>{
    try {
        const response=await catalogModel.deleteMany()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json("Lỗi hệ thống!");
    }
}
module.exports={getCatalogByIdParent,createCatalog,getall,del}