import { Router } from 'express';
import { prisma } from '../db/db.js';
export const userRouter = Router();
// userRouter.get('/users', async (req, res) => {
//     const users = await prisma.user.create({
//         data: {
//             name: "Jane",
//             email: "jane.doe@example.com"
//         }
//     });
//     res.json(users);
// })
// User
userRouter.get('/user/:id', async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ message: "Missing required fields" });
    }
    const user = await prisma.user.findUnique({
        where: {
            id: Number(id)
        },
        include: {
            cart: {
                include: {
                    product: true
                }
            },
        }
    });
    const cart = user?.cart;
    const addedItems = cart?.map(item => {
        return {
            cartId: item.id,
            productId: item.productId,
            itemName: item.product.name,
            quantity: item.quantity,
            price: item.product.price
        };
    });
    const totalPrice = addedItems?.reduce((total, item) => {
        return total + (Number(item.price) * Number(item.quantity));
    }, 0);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    res.json({ user, addedItems, totalPrice });
});
// Cart
userRouter.post('/cart', async (req, res) => {
    const { userId, productId, quantity } = req.body;
    if (!userId || !productId || !quantity) {
        return res.status(400).json({ message: "Missing required fields" });
    }
    const user = await prisma.user.findUnique({
        where: {
            id: userId
        }
    });
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    const product = await prisma.products.findUnique({
        where: {
            id: productId
        }
    });
    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }
    const cartItem = await prisma.cartItems.findUnique({
        where: {
            userId_productId: {
                userId,
                productId
            }
        }
    });
    if (cartItem) {
        const updatedCartItem = await prisma.cartItems.update({
            where: {
                userId_productId: {
                    userId,
                    productId
                }
            },
            data: {
                quantity: cartItem.quantity + 1
            }
        });
        return res.json(updatedCartItem);
    }
    const cart = await prisma.cartItems.create({
        data: {
            userId,
            productId,
            quantity
        }
    });
    res.json(cart);
});
userRouter.patch("/cart", async (req, res) => {
    const { quantity, cartId } = req.body;
    if (!quantity || !cartId) {
        return res.status(400).json({ message: "Missing required fields" });
    }
    const updateItem = await prisma.cartItems.update({
        where: {
            id: Number(cartId)
        },
        data: {
            quantity: quantity
        }
    });
    res.json(updateItem);
});
userRouter.delete("/cart/:id", async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ message: "Missing required fields" });
    }
    const deleteItem = await prisma.cartItems.delete({
        where: {
            id: Number(id)
        }
    });
    res.json(deleteItem);
});
// Checkout
userRouter.post("/checkout", async (req, res) => {
    try {
        const { userId, items } = req.body;
        if (!userId || !Array.isArray(items) || items.length === 0) {
            return res.status(400).json({ message: "Missing required fields" });
        }
        // createMany expects an array of objects:
        const receipt = await prisma.receipt.createMany({
            data: items.map(item => ({
                userId: Number(userId),
                productId: Number(item.productId),
                quantity: Number(item.quantity),
                price: Number(item.product.price) * Number(item.quantity),
            })),
        });
        if (!receipt) {
            return res.status(400).json({ message: "Failed to create receipt" });
        }
        res.json({ message: "Receipt created successfully", receipt });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to create receipt", error });
    }
});
userRouter.delete("/checkout/:userId", async (req, res) => {
    const { userId } = req.params;
    const user = await prisma.user.findUnique({
        where: {
            id: Number(userId)
        }
    });
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    const deleteReceipt = await prisma.cartItems.deleteMany({
        where: {
            userId: Number(userId)
        }
    });
    res.json(deleteReceipt);
});
// Receipt
userRouter.get("/receipt/:userId", async (req, res) => {
    const { userId } = req.params;
    if (!userId) {
        return res.status(400).json({ message: "Missing required fields" });
    }
    const receipt = await prisma.user.findUnique({
        where: {
            id: Number(userId),
        },
        include: {
            receipt: {
                include: {
                    product: true,
                }
            }
        }
    });
    const total = receipt?.receipt.reduce((total, item) => {
        return total + Number(item.price);
    }, 0);
    res.json({ receipt, total });
});
//# sourceMappingURL=userRouter.js.map