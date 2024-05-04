const productModel =require('../Models/productModel')

//-----Create products
const createProduct=async(req,res)=>{
    try {
        const newProduct=new productModel(req.body)
        await newProduct.save();
        res.status(200).json('Thêm sản phẩm thành công!')
    } catch (error) {
        res.status(500).json('Lỗi hệ thống!')
    }

}
//-----Get products 
const getProductsCard=async(req,res)=>{
    const {limit,sort,catalog_id}=req.query;
    try {
        const response=await productModel.find({}, { name: 1, image_list: 1, _id: 1, price: 1 ,discount:1}).sort({updatedAt: -1})
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json('Lỗi hệ thống!')
    }

}
//-----Get product By Id
const getProductById=async(req,res)=>{
    try {
        const response =await productModel.findById(req.params.id);
        res.status(200).json(response)
    } catch (error) {
          res.status(500).json('Lỗi hệ thống!')
    }
}
//-----Delete product By Id
const deleteProduct=async(req,res)=>{
    try {
       await productModel.findByIdAndDelete(req.params.id)
       res.status(200).json("Xóa Sản phẩm thành công")
    } catch (error) {
        res.status(500).json('Lỗi hệ thống!')
    }
}
//-----Update product by Id
const updateProduct=async(req,res)=>{
    try {
        await productModel.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).json('Đã cập nhật sản phẩm');
    } catch (error) {
        res.status(500).json("Lỗi hệ thống!");
    }
}

module.exports = {
    createProduct,
    getProductsCard,
    getProductById,
    deleteProduct,
    updateProduct
};