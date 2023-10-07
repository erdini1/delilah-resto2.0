import { HTTP_STATUSES } from "../constants/http.js"
import products from "../models/products.js"

export const allProducts = (req, res) => {
    return res.status(HTTP_STATUSES.OK).json(products)
}

export const newProduct = (req, res) => {
    const { name, price } = req.body
    products.push({
        id: products.length ? products[products.length - 1].id + 1 : 0,     //TODO: VER OTRA FORMA. si elimino el ultimo elemento y agrego uno nuevo, en la orden dos productos van a tener el mismo id
        name,
        price
    })
    return res.status(HTTP_STATUSES.CREATED).json({ msg: "Product added successfully" })
}

export const updateProduct = (req, res) => {
    const product = req.product
    const { name, price } = req.body
    products.forEach(element => element.id === product.id ? (
        element.name = name || element.name,
        element.price = price || element.price
    ) : "")
    return res.status(HTTP_STATUSES.OK).json({ msg: "Product modified successfully" })
}

export const deleteProduct = (req, res) => {
    const product = req.product
    const indexProduct = products.findIndex(element => element.id === product.id)
    products.splice(indexProduct, 1)
    return res.status(HTTP_STATUSES.OK).json({ msg: "Product deleted successfully" })
}