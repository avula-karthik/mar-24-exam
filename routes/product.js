var express = require('express');
var router = express.Router();
var productController = require('../controllers/product');
router.get('/', productController.getproducts);
router.post('/', productController.createproduct);
module.exports = router;
