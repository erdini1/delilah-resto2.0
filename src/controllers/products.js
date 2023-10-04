import { HTTP_STATUSES } from "../constants/http.js"

export const allProducts = (req, res) => {
    return res.status(HTTP_STATUSES.OK).json({ msg: "From all products" })
}