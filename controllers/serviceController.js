import asyncHandler from 'express-async-handler';
import Service from '../models/serviceModel.js';

export const getServices = asyncHandler(async (req, res) => {
    const services = await Service.find()

    if(!services || services.length === 0){
        res.status(404)
        throw new Error('There are no services yet!')
    }

    res.json(services);
});

export const createService = asyncHandler(async (req, res) => {
    const {name, type, price} = req.body

    const service = await Service.create({name, type, price})

    if(!service){
        res.status(400)
        throw new Error('Bad Data!')
    }

    res.json(service)
});