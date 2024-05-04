const ctrl =require('../Controllers/catalogController')
const express=require('express')
const router=express.Router();
router.get('/parent/:id',ctrl.getCatalogByIdParent)
router.post('/',ctrl.createCatalog)
router.get('/',ctrl.getall)
router.delete('/',ctrl.del)
module.exports=router