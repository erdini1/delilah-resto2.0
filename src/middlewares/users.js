import { HTTP_STATUSES } from "../constants/http.js"
import { comparePassword } from "../helpers/hashPassword.js"
import { decodedToken } from "../helpers/decodedToken.js"
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

export const validateUserLoginData = (req, res, next) => {
    const { username, password } = req.body
    if (!username || !password) {
        return res.status(HTTP_STATUSES.BAD_REQUEST).json({ error: "The fields cannot be empty" })
    }
    next()
}

export const validateUserCredentials = async (req, res, next) => {
    const { username, password } = req.body
    const user = users.find(element => element.username === username)
    if (!user) {
        return res.status(HTTP_STATUSES.UNAUTHORIZED).json({ error: "Invalid Credentials" })
    }
    if (!await comparePassword(password, user.password)) {
        return res.status(HTTP_STATUSES.UNAUTHORIZED).json({ error: "Invalid Credentials" })
    }
    req.user = user
    next()
}

export const isAuthenticated = (req, res, next) => {
    const stringToken = req.headers.authorization
    try {
        const { username } = decodedToken(stringToken)
        const user = users.find(element => element.username === username)
        if (!user) return res.status(HTTP_STATUSES.UNAUTHORIZED).json({ error: "Not authenticated" })
        req.user = user
        next()
    } catch (error) {
        return res.status(HTTP_STATUSES.UNAUTHORIZED).json({ error: "Not authenticated" })
    }
}

export const isAdmin = (req, res, next) => {
    const { admin } = req.user
    if (admin !== true) {
        return res.status(HTTP_STATUSES.UNAUTHORIZED).json({ error: "You do not have administrator permissions." })
    }
    next()
}