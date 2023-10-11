import { HTTP_STATUSES } from "../constants/http.js"
import orders from "../models/orders.js"
import paymentMethods from "../models/paymentMethods.js"
import products from "../models/products.js"

export const validateOrderData = (req, res, next) => {
    const { address, paymentMethod } = req.body
    if (address === "" || !paymentMethod) return res.status(HTTP_STATUSES.BAD_REQUEST).json({ error: "The fields cannot be empty" })
    next()
}

export const validateOrderDatailsData = (req, res, next) => {
    const { details } = req.body
    const hasInvalidData = details.some(element => {
        return element.productId === undefined || element.quantity === undefined || typeof element.productId !== "number" || typeof element.quantity !== "number"
    })
    if (hasInvalidData) return res.status(HTTP_STATUSES.BAD_REQUEST).json({ error: "The fields cannot be empty and must be of the correct type" })
    next()
}

export const validatePaymentMethod = (req, res, next) => {
    const { paymentMethod } = req.body
    const findPaymentMethod = paymentMethods.find(element => element.method === paymentMethod)
    if (!findPaymentMethod) return res.status(HTTP_STATUSES.BAD_REQUEST).json({ error: "You must specify a valid payment method" })
    next()
}

export const validateProductInDetails = (req, res, next) => {
    const { details } = req.body
    const hasInvalidData = details.some(element => {
        const { productId } = element
        const product = products.find(element => element.id === productId)
        return !product
    })
    if (hasInvalidData) return res.status(HTTP_STATUSES.BAD_REQUEST).json({ error: "The specified ID doesn't belong to a product" })
    next()
}

export const validateOrderExistance = (req, res, next) => {
    const idOrder = +req.params.idOrder
    const order = orders.find(element => element.id === idOrder)
    if (!order) return res.status(HTTP_STATUSES.BAD_REQUEST).json({ error: "The specified ID doesn't belong to a order" })
    req.order = order
    next()
}

export const validateOrderNotPending = (req, res, next) => {
    const order = req.order
    if (order.orderStatus === "pending") return res.status(HTTP_STATUSES.BAD_REQUEST).json({ error: "The order is not confirmed" })
    next()
}

export const validateModifyOrderStateData = (req, res, next) => {
    const { orderStatus } = req.body
    if (orderStatus === "") return res.status(HTTP_STATUSES.BAD_REQUEST).json({ error: "The fields cannot be empty" })
    next()
}
