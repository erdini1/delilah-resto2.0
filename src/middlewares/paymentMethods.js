import { HTTP_STATUSES } from "../constants/http.js"
import paymentMethods from "../models/paymentMethods.js"


export const validatePaymentMethodData = (req, res, next) => {
    const { method } = req.body
    if (!method) return res.status(HTTP_STATUSES.BAD_REQUEST).json({ error: "The fields cannot be empty" })
    next()
}

export const validateUniquePaymentMethod = (req, res, next) => {
    const { method } = req.body
    const findMethod = paymentMethods.find(element => element.method.toUpperCase() == method.toUpperCase())
    if (findMethod) return res.status(HTTP_STATUSES.BAD_REQUEST).json({ error: "The payment method is already added" })
    next()
}

export const validatePaymentMethodExistance = (req, res, next) => {
    const idMethod = +req.params.idMethod
    const method = paymentMethods.find(element => element.id === idMethod)
    if (!method) return res.status(HTTP_STATUSES.BAD_REQUEST).json({ error: "The specified ID doesn't belong to a payment method" })
    req.paymentMethod = method
    next()
}