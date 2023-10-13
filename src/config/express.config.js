import express from "express"
import cors from "cors"

const expressConfig = () => {
    const app = express()
    app.use(cors())
    app.use(express.json())
    return app
}

export default expressConfig