import { Router } from "express";
import authRouter from "./auth"
import clientsRouter from "./clients";

const indexRouter = Router()

indexRouter.use("/auth", authRouter)
indexRouter.use("/clients", clientsRouter)

export default indexRouter