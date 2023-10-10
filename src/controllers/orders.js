import { HTTP_STATUSES } from "../constants/http.js"
import orders from "../models/orders.js"
import { formatDate } from "../helpers/formatDate.js"


export const allOrders = (req, res) => {
    const user = req.user
    if (user.admin) return res.status(HTTP_STATUSES.OK).json(orders)
    const ordersUser = orders.filter(element => element.username === user.username)
    return res.status(HTTP_STATUSES.OK).json(ordersUser)
}

// TODO: hacer una función que me devuelva las 5 primeras letras de un producto
// TODO: hacer función que me traiga el total de la orden
// TODO: hacer middleware que revise si existe el metodo de pago
export const newOrder = (req, res) => {
    const { address, paymentMethod, details } = req.body
    const user = req.user

    orders.push({
        id: orders[orders.length - 1].id + 1,
        orderStatus: "pending",
        orderDate: formatDate(),
        description: "desc",
        total: 0,
        username: user.username,
        address: address || user.address,
        paymentMethod: paymentMethod,
        details
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