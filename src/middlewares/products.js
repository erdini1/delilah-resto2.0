import { HTTP_STATUSES } from "../constants/http.js"


export const validateProductData = (req, res, next) => {
    const { name, price } = req.body
    if (req.method === "POST" && (!name || !price)) return res.status(HTTP_STATUSES.BAD_REQUEST).json({ error: "The fields cannot be empty" })

    if ([name, price].some(element => element === "")) return res.status(HTTP_STATUSES.BAD_REQUEST).json({ error: "The fields cannot be empty" })

    next()
}