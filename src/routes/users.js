import express from "express"
import { createUser, login } from "../controllers/users.js"
import { validateUserRegistrationData, validateUserPasswords, validateUserUniqueData, validateUserLoginData, validateUserCredentials } from "../middlewares/users.js"

const router = express.Router()

router
    .post("/register", validateUserRegistrationData, validateUserUniqueData, validateUserPasswords, createUser)
    .post("/login", validateUserLoginData, validateUserCredentials, login)


export default router