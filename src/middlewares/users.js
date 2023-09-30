import { HTTP_STATUSES } from "../constants/http.js"
import users from "../models/users.js"


export const validateUserRegistrationData = (req, res, next) => {
    const { username, name, lastname, email, phone, address, password, passwordConf } = req.body
    if (!username || !name || !lastname || !email || !phone || !address || !password || !passwordConf) {
        return res.status(HTTP_STATUSES.BAD_REQUEST).json({ error: "The fields cannot be empty" })
    }
    next()
}

export const validateUserPasswords = (req, res, next) => {
    const { password, passwordConf } = req.body
    if (password !== passwordConf) return res.status(HTTP_STATUSES.BAD_REQUEST).json({ error: "Passwords must match" })
    next()
}

export const validateUserUniqueData = (req, res, next) => {
    const { username, email } = req.body
    if (users.some(element => element.username === username)) {
        return res.status(HTTP_STATUSES.BAD_REQUEST).json({ error: "The username is already in use" })
    }
    if (users.some(element => element.email === email)) {
        return res.status(HTTP_STATUSES.BAD_REQUEST).json({ error: "The email is already in use" })
    }
    next()
}