import { HTTP_STATUSES } from "../constants/http.js"
import orders from "../models/orders.js"
import { formatDate, descriptionOrder, totalOrder, subtotalOrder } from "../helpers/helpersOrders.js"


export const allOrders = (req, res) => {
    const user = req.user
    if (user.admin) return res.status(HTTP_STATUSES.OK).json(orders)
    const ordersUser = orders.filter(element => element.username === user.username)
    return res.status(HTTP_STATUSES.OK).json(ordersUser)
}

// TODO: hacer un middleware que revise que los productos existan
export const newOrder = (req, res) => {
    const { address, paymentMethod, details } = req.body
    const user = req.user

    orders.push({
        id: orders[orders.length - 1].id + 1,
        orderStatus: "pending",
        orderDate: formatDate(),
        description: descriptionOrder(details),
        total: totalOrder(details),
        username: user.username,
        address: address || user.address,
        paymentMethod: paymentMethod,
        details /* VER */
    })


    return res.status(HTTP_STATUSES.OK).json({ msg: "From new Order controller" })
}



export const modifyOrderState = (req, res) => {
    const order = req.order
    const { orderStatus } = req.body
    orders.forEach(element => (
        element.id === order.id ? (
            element.orderStatus = orderStatus
        ) : ""
    ))
    return res.status(HTTP_STATUSES.OK).json({ msg: "Order status updated successfully" })
}