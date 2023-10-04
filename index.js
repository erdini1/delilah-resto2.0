import expressConfig from "./src/config/Express.config.js"
import { PORT } from "./src/config/env.config.js"

import users from "./src/routes/users.js"
import products from "./src/routes/products.js"

const app = expressConfig()

app.use("/users", users)
app.use("/products", products)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})