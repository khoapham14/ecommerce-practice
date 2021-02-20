const express = require('express');
const router = express.Router();


const { getAllProducts, getProductById } = require('../controller/productControllers');

//@desc   Get all products from database
//@route  GET /api/products
//@access Public
router.get('/',  getAllProducts);

//@desc   Get all products from database
//@route  GET /api/products
//@access Public
router.get('/:id', getProductById);


module.exports = router;