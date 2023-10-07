import express from "express"
import { allOrders } from "../controllers/orders.js"
import { isAuthenticated } from "../middlewares/users.js"

const router = express.Router()

router.get("/", isAuthenticated, allOrders)

export default router