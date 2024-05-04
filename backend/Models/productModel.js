const mongoose=require('mongoose')
const productSchema=new mongoose.Schema(
    {
      name:String,
      catalog_id:String,
      price:String,
      image_list:Array,
      quantity:Number,
      content:String,
      sold:Number,
      discount:Number
    },
    {
        timestamps:true,
    }
)
const productModel=mongoose.model("Product",productSchema)
module.exports=productModel