import express from "express"
import { allProducts, newProduct } from "../controllers/products.js"
import { isAuthenticated, isAdmin } from "../middlewares/users.js"
import { validateProductData } from "../middlewares/products.js"

const router = express.Router()

router
    .get("/", isAuthenticated, allProducts)
    .post("/", isAuthenticated, isAdmin, validateProductData, newProduct)

export default router