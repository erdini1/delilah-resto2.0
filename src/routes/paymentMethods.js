import express from "express"
import { allPaymentMethod, newPaymentMethod } from "../controllers/paymentMethods.js"
import { isAdmin, isAuthenticated } from "../middlewares/users.js"
import { validatePaymentMethodData } from "../middlewares/paymentMethods.js"

const router = express.Router()

router
    .get("/", isAuthenticated, isAdmin, allPaymentMethod)
    .post("/", isAuthenticated, isAdmin, validatePaymentMethodData, newPaymentMethod)

export default router