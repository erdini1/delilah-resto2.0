import JWT from "jsonwebtoken"
import { server } from "../config/env.config.js";

export const decodedToken = (string) => {
    const token = string.split(" ")[1]
    const decoded = JWT.verify(token, server.SIGNATURE)
    return decoded
}
