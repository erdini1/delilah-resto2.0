import express from "express"
import { allProducts, newProduct, updateProduct } from "../controllers/products.js"
import { isAuthenticated, isAdmin } from "../middlewares/users.js"
import { validateProductData, validateProductExistance } from "../middlewares/products.js"

const router = express.Router()

router
    .get("/", isAuthenticated, allProducts)
    .post("/", isAuthenticated, isAdmin, validateProductData, newProduct)
    .put("/:idProduct", isAuthenticated, isAdmin, validateProductExistance, validateProductData, updateProduct)

export default router