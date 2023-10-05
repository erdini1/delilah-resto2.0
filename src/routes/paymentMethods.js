import express from "express"
import { allPaymentMethod, newPaymentMethod } from "../controllers/paymentMethods.js"
import { isAdmin, isAuthenticated } from "../middlewares/users.js"
import { validatePaymentMethodData, validateUniquePaymentMethod } from "../middlewares/paymentMethods.js"

const router = express.Router()

router
    .get("/", isAuthenticated, isAdmin, allPaymentMethod)
    .post("/", isAuthenticated, isAdmin, validatePaymentMethodData, validateUniquePaymentMethod, newPaymentMethod)

export default router