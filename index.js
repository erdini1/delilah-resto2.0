import expressConfig from "./src/config/Express.config.js"
import { server } from "./src/config/env.config.js"

import swaggerUi from "swagger-ui-express"
import YAML from "yamljs"
const swaggerDocs = YAML.load("./doc.yaml")

import users from "./src/routes/users.js"
import products from "./src/routes/products.js"
import paymentMethod from "./src/routes/paymentMethods.js"
import orders from "./src/routes/orders.js"

const app = expressConfig()

// TODO: Add CORS

// Route middlewares
app.use("/users", users)
app.use("/products", products)
app.use("/paymentMethods", paymentMethod)
app.use("/orders", orders)

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.listen(server.PORT, () => {
    console.log(`Server running on port ${server.PORT}`)
})