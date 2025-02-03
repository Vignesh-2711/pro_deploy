
const productController = require('../controller/ProductController')
const router = require('express').Router()

router.get('/api/products', productController.getAllProducts);
router.get('/api/product/:id', productController.getSingleProduct)
router.post('/api/product',productController.postProduct)
router.put('/api/product',productController.updateProduct)
router.delete('/api/product/:id',productController.deleteProduct)

module.exports = router