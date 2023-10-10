import express from "express"
import { allOrders, modifyOrderState, newOrder } from "../controllers/orders.js"
import { isAdmin, isAuthenticated } from "../middlewares/users.js"
import { validateModifyOrderStateData, validateOrderData, validateOrderDatailsData, validateOrderExistance, validateOrderNotPending } from "../middlewares/orders.js"

const router = express.Router()

router
    .get("/", isAuthenticated, allOrders)
    .post("/", isAuthenticated, validateOrderData, validateOrderDatailsData, newOrder)
    .post("/modifyState/:idOrder", isAuthenticated, isAdmin, validateOrderExistance, validateModifyOrderStateData, validateOrderNotPending, modifyOrderState)

export default router