import expressConfig from "./src/config/Express.config.js"
import { PORT } from "./src/config/env.config.js"

const app = expressConfig()

app.get("/", (req, res) => {
    res.json("Hello World")
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})