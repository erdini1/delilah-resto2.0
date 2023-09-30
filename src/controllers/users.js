import { HTTP_STATUSES } from "../constants/http.js"

export const createUser = (req, res) => {
    const { username, name, lastname, email, phone, addres, admin, password, passwordConf } = req.body




    return res.status(HTTP_STATUSES.CREATED).json({ msg: "User created succesfully" })
}