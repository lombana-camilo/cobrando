import cookieParser from "cookie-parser"
import express from "express"
import routes from "./routes"

const server = express()

// Middlewares
server.use(cookieParser())

// Route
server.use("/",routes)

export default server
