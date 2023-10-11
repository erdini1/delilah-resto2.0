import express from "express"
import { allOrders, modifyOrderState, newOrder, updateOrder } from "../controllers/orders.js"
import { isAdmin, isAuthenticated } from "../middlewares/users.js"
import { validateModifyOrderStateData, validateOrderData, validateOrderDatailsData, validateOrderExistance, validateOrderNotPending, validateOrderOwnership, validatePaymentMethod, validateProductInDetails } from "../middlewares/orders.js"

const router = express.Router()

router
    .get("/", isAuthenticated, allOrders)
    .post("/", isAuthenticated, validateOrderData, validateOrderDatailsData, validatePaymentMethod, validateProductInDetails, newOrder)
    .put("/:idOrder", isAuthenticated, validateOrderExistance, validateOrderOwnership, validateOrderData, validateOrderDatailsData, validatePaymentMethod, validateProductInDetails, updateOrder)
    .post("/modifyState/:idOrder", isAuthenticated, isAdmin, validateOrderExistance, validateModifyOrderStateData, validateOrderNotPending, modifyOrderState)

export default router