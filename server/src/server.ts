import express from "express";
import routes from "./routes";
import cors from "cors";

const server = express();

// Middlewares
server.use(express.urlencoded({ extended: true }))
server.use(cors({ credentials: true, origin: "*",methods: "GET,HEAD,PUT,PATCH,POST,DELETE", }));

// Route
server.use("/", routes);

export default server;
