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