import { HTTP_STATUSES } from "../constants/http.js"
import orders from "../models/orders.js"


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