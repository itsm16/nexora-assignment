import { QueryClient } from "@tanstack/react-query";
import axios from "axios"

export const queryClient = new QueryClient();


export async function getApiProducts() {
    const res = await axios.get('https://fakestoreapi.com/products')
    return res.data
}

export async function getProducts() {
    const res = await axios.get('http://localhost:3000/api/products')
    return res.data
}

export async function postProductToCart(userId: number, productId: number) {
    const res = await axios.post('http://localhost:3000/api/cart', {
        userId,
        productId,
        quantity: 1
    })
    return res.data
}

export async function getUser(userId: number) {
    const res = await axios.get(`http://localhost:3000/api/user/${userId}`)
    return res.data
}

export async function updateItemQuantity(cartId: number, quantity: number){
    const res = await axios.patch(`http://localhost:3000/api/cart/`, {
        cartId,
        quantity
    })
    return res.data
}

export async function deleteItemFromCart(cartId: number){
    const res = await axios.delete(`http://localhost:3000/api/cart/${cartId}`)
    return res.data
}

export async function createCheckoutReceipt(userId: number, items: any) {
    const res = await axios.post(`http://localhost:3000/api/checkout`, {
        userId,
        items
    })
    return res.data
}

export async function deleteCart(userId: number) {
    const res = await axios.delete(`http://localhost:3000/api/checkout/${userId}`)
    return res.data
}

export async function getReceipt(userId:number) {
    const res = await axios.get(`http://localhost:3000/api/receipt/${userId}`)
    return res.data
}

