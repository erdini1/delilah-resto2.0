import { HTTP_STATUSES } from "../constants/http.js"
import orders from "../models/orders.js"


export const allOrders = (req, res) => {
    const user = req.user
    if (user.admin) return res.status(HTTP_STATUSES.OK).json(orders)
    const ordersUser = orders.filter(element => element.username === user.username)
    return res.status(HTTP_STATUSES.OK).json(ordersUser)
}

// TODO: agregar validateOrderData
// TODO: agregar validateModifyStateData

export const modifyStateOrder = (req, res) => {
    const order = req.order
    const { orderStatus } = req.body
    orders.forEach(element => (
        element.id === order.id ? (
            element.orderStatus = orderStatus
        ) : ""
    ))
    return res.status(HTTP_STATUSES.OK).json({ msg: "Order status updated successfully" })
}