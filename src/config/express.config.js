import express from "express"

const expressConfig = () => {
    const app = express()
    app.use(express.json())
    return app
}

export default expressConfig