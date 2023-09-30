import express from "express"
import { createUser } from "../controllers/users.js"
import { validateUserRegistrationData, validateUserPasswords, validateUserUniqueData } from "../middlewares/users.js"

const router = express.Router()

router.post("/register", validateUserRegistrationData, validateUserUniqueData, validateUserPasswords, createUser)

export default router