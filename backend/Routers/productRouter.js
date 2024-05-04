const ctrl =require('../Controllers/productController')
const express=require('express')
const router=express.Router();
router.post('/create',ctrl.createProduct);
router.delete('/:id',ctrl.deleteProduct);
router.put('/:id',ctrl.updateProduct);
router.get('/:id',ctrl.getProductById);
router.get('/',ctrl.getProductsCard);
module.exports=router