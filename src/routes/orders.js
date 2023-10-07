import express from "express"
import { allOrders, modifyStateOrder } from "../controllers/orders.js"
import { isAdmin, isAuthenticated } from "../middlewares/users.js"
import { validateOrderExistance, validateOrderNotPending } from "../middlewares/orders.js"

const router = express.Router()

router
    .get("/", isAuthenticated, allOrders)
    .post("/modifyState/:idOrder", isAuthenticated, isAdmin, validateOrderExistance, validateOrderNotPending, modifyStateOrder)

export default router