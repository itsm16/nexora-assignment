import {Router} from 'express';
import { prisma } from '../db/db.js';

export const productRouter = Router();

// productRouter.get('/check', (req, res) => {
//     res.send("product route ts");
// })

// productRouter.post('/products', async (req, res) => {
//     const { name, price } = req.body;
//     await prisma.products.create({
//         data: {
//             name,
//             price
//         }
//     })
//     res.send("Product added successfully");
// })

productRouter.get('/products', async (req, res) => {
    const products = await prisma.products.findMany();
    res.json(products);
})


