import express from "express"
import { allPaymentMethod, newPaymentMethod, updatePaymentMethod } from "../controllers/paymentMethods.js"
import { isAdmin, isAuthenticated } from "../middlewares/users.js"
import { validatePaymentMethodData, validatePaymentMethodExistance, validateUniquePaymentMethod } from "../middlewares/paymentMethods.js"

const router = express.Router()

router
    .get("/", isAuthenticated, isAdmin, allPaymentMethod)
    .post("/", isAuthenticated, isAdmin, validatePaymentMethodData, validateUniquePaymentMethod, newPaymentMethod)
    .put("/:idMethod", isAuthenticated, isAdmin, validatePaymentMethodData, validatePaymentMethodExistance, validateUniquePaymentMethod, updatePaymentMethod)

export default router