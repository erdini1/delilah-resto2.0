import { HTTP_STATUSES } from "../constants/http.js"


export const validateUserRegistrationData = (req, res, next) => {
    const { username, name, lastname, mail, phone, addres, admin, password, passwordConf } = req.body
    if (!username || !name || !lastname || !mail || !phone || !addres || !admin || !password || !passwordConf) {
        return res.status(HTTP_STATUSES.BAD_REQUEST).json({ error: "The fields cannot be empty" })
    }


    next()
}