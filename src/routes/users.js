import express from "express"
import { createUser } from "../controllers/users.js"
import { validateUserRegistrationData } from "../middlewares/users.js"

const router = express.Router()

router.post("/register", validateUserRegistrationData, createUser)

export default router