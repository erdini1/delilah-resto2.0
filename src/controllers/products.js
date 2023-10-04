import { HTTP_STATUSES } from "../constants/http.js"
import products from "../models/products.js"

export const allProducts = (req, res) => {
    return res.status(HTTP_STATUSES.OK).json(products)
}

export const newProduct = (req, res) => {
    const { name, price } = req.body
    products.push({
        id: products.length ? products[products.length - 1].id + 1 : 0,     //VER OTRA FORMA. si elimino el ultimo elemento y agrego uno nuevo, en la orden dos productos van a tener el mismo id
        name,
        price
    })
    return res.status(HTTP_STATUSES.CREATED).json({ msg: "Product added succesfully" })
}