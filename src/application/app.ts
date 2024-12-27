import express from "express"
import { publicRouter } from "../routes/public_routes"

const app = express()
app.use(express.json())
app.use(publicRouter)

export default app