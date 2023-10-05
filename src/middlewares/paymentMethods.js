import { HTTP_STATUSES } from "../constants/http.js"


export const validatePaymentMethodData = (req, res, next) => {
    const { method } = req.body
    if (!method) return res.status(HTTP_STATUSES.BAD_REQUEST).json({ error: "The fields cannot be empty" })
    next()
}