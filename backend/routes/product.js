const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product');
const Uploader = require('../middleware/upload')

// Add to Product
router.post('/add-product', Uploader.single("image"), ProductController.addProduct);

//related Product
router.get('/related-products/:id', ProductController.getRelatedProducts)

// get All Product
router.get('/get-all', ProductController.getAllProduct);

//Update Product
router.put('/update-product/:id', ProductController.updateProduct);

// Delete
router.delete('/delete-product/:id', ProductController.deletePoduct);

// Get Product By Id
router.get('/get-product/:id', ProductController.getProductById);

module.exports = router;