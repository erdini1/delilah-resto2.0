import express from "express"
import { allOrders, modifyOrderState, newOrder } from "../controllers/orders.js"
import { isAdmin, isAuthenticated } from "../middlewares/users.js"
import { validateModifyOrderStateData, validateOrderData, validateOrderDatailsData, validateOrderExistance, validateOrderNotPending, validatePaymentMethod, validateProductInDetails } from "../middlewares/orders.js"

const router = express.Router()

router
    .get("/", isAuthenticated, allOrders)
    .post("/", isAuthenticated, validateOrderData, validateOrderDatailsData, validatePaymentMethod, validateProductInDetails, newOrder)
    .post("/modifyState/:idOrder", isAuthenticated, isAdmin, validateOrderExistance, validateModifyOrderStateData, validateOrderNotPending, modifyOrderState)

export default router