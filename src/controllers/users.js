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