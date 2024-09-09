import { NextFunction, Request, Response, Router } from "express";
import ClientsController from "../controllers/clients"

const clientsRouter = Router()

clientsRouter.get("/",  (req: Request, res: Response, next: NextFunction) => {
    ClientsController.getAllClients(req, res, next);
  })
clientsRouter.post("/", (req: Request, res: Response, next: NextFunction) => {
    ClientsController.create(req, res, next);
  })
clientsRouter.patch("/", (req: Request, res: Response, next: NextFunction) => {
    ClientsController.update(req, res, next);
  })
clientsRouter.delete("/", (req: Request, res: Response, next: NextFunction) => {
    ClientsController.deleteClients(req, res, next);
  })

export default clientsRouter