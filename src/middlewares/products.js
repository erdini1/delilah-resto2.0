import { HTTP_STATUSES } from "../constants/http.js"
import products from "../models/products.js"


export const validateProductData = (req, res, next) => {
    const { name, price } = req.body
    if (req.method === "POST" && (!name || !price)) return res.status(HTTP_STATUSES.BAD_REQUEST).json({ error: "The fields cannot be empty" })

    if ([name, price].some(element => element === "")) return res.status(HTTP_STATUSES.BAD_REQUEST).json({ error: "The fields cannot be empty" })

    next()
}

export const validateProductExistance = (req, res, next) => {
    const id = +req.params.idProduct
    const product = products.find(element => element.id === id)
    if (!product) {
        return res.status(HTTP_STATUSES.BAD_REQUEST).json({ error: "The specified ID doesn't belong to a product" })
    }
    req.product = product
    next()
}