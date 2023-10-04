import express from "express"
import { allProducts } from "../controllers/products.js"
import { isAuthenticated } from "../middlewares/users.js"

const router = express.Router()

router.get("/", isAuthenticated, allProducts)

export default router