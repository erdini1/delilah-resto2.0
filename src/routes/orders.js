import express from "express"
import { allOrders, confirmOrder, modifyOrderState, newOrder, updateOrder } from "../controllers/orders.js"
import { isAdmin, isAuthenticated } from "../middlewares/users.js"
import { validateModifyOrderStateData, validateOrderData, validateOrderDatailsData, validateOrderExistance, validateOrderNotPending, validateOrderOwnership, validateOrderState, validatePaymentMethod, validateProductInDetails } from "../middlewares/orders.js"

const router = express.Router()

router
    .get("/", isAuthenticated, allOrders)
    .post("/", isAuthenticated, validateOrderData, validateOrderDatailsData, validatePaymentMethod, validateProductInDetails, newOrder)
    .put("/:idOrder", isAuthenticated, validateOrderExistance, validateOrderState, validateOrderOwnership, validateOrderData, validateOrderDatailsData, validatePaymentMethod, validateProductInDetails, updateOrder)
    .post("/modifyState/:idOrder", isAuthenticated, isAdmin, validateOrderExistance, validateModifyOrderStateData, validateOrderNotPending, modifyOrderState)
    .post("/confirm/:idOrder", isAuthenticated, validateOrderExistance, validateOrderOwnership, validateOrderState, confirmOrder)

export default router