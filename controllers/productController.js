import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

export const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find()

    if(!products || products.length === 0){
        res.status(404)
        throw new Error('There are no products yet!')
    }

    res.json(products);
});

export const createProduct = asyncHandler(async (req, res) => {
    const {name, brand, price} = req.body

    const product = await Product.create({name, brand, price})

    if(!product){
        res.status(400)
        throw new Error('Bad Data!')
    }

    res.json(product)
});