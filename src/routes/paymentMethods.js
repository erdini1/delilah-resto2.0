import express from "express"
import { allPaymentMethod } from "../controllers/paymentMethods.js"
import { isAdmin, isAuthenticated } from "../middlewares/users.js"

const router = express.Router()

router
    .get("/", isAuthenticated, isAdmin, allPaymentMethod)

export default router