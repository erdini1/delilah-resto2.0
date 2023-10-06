import { HTTP_STATUSES } from "../constants/http.js"
import paymentMethods from "../models/paymentMethods.js"


export const allPaymentMethod = (req, res) => {
    return res.status(HTTP_STATUSES.OK).json(paymentMethods)
}

export const newPaymentMethod = (req, res) => {
    const { method } = req.body
    paymentMethods.push({
        id: paymentMethods.length != 0 ? paymentMethods[paymentMethods.length - 1].id + 1 : 0,
        method
    })
    return res.status(HTTP_STATUSES.CREATED).json({ msg: "Payment method added succesfully" })
}

export const updatePaymentMethod = (req, res) => {
    const { method } = req.body
    const paymentMethod = req.paymentMethod
    paymentMethods.forEach(element => (
        element.id === paymentMethod.id ? (
            element.method = method
        ) : ""
    ))
    return res.status(HTTP_STATUSES.OK).json({ msg: "Payment method updated succesfully" })
}

export const deletePaymentMethod = (req, res) => {
    const paymentMethod = req.paymentMethod
    const indexPaymentMethod = paymentMethods.findIndex(element => element.id === paymentMethod.id)
    paymentMethods.splice(indexPaymentMethod, 1)
    return res.status(HTTP_STATUSES.OK).json({ msg: "Payment method deleted succesfully" })
}