import { HTTP_STATUSES } from "../constants/http.js"
import users from "../models/users.js"
import { hashPassword } from "../helpers/hashPassword.js"

export const createUser = async (req, res) => {
    const { username, name, lastname, email, phone, address, password } = req.body
    users.push({
        username,
        name,
        lastname,
        email,
        phone,
        address,
        password: await hashPassword(password),
        admin: false
    })
    return res.status(HTTP_STATUSES.CREATED).json({ msg: "User created succesfully" })
}

export const login = (req, res) => {
    const user = req.user
    const indexUser = users.findIndex(element => element.username === user.username)
    return res.status(HTTP_STATUSES.OK).json({
        msg: "Loggued in successfully",
        id: indexUser
    })
}