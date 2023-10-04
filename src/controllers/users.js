import JWT from "jsonwebtoken"
import { HTTP_STATUSES } from "../constants/http.js"
import { server } from "../config/env.config.js"
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
    const { username, admin } = req.user
    const token = JWT.sign({ username, admin }, server.SIGNATURE, {
        expiresIn: "30m"
    })
    return res.status(HTTP_STATUSES.OK).json({
        msg: "Loggued in successfully",
        token
    })
}