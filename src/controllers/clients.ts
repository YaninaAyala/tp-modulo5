import { NextFunction, Request, Response } from "express";
import ClientsService from "../services/clients";

class ClientsController {
  static getAllClients(req: Request, res: Response, next: NextFunction) {
    try { ClientsService.getAllClients()
    } catch (error) {
      next(error);
    }
  }

  static create (req: Request, res: Response, next: NextFunction) {
    try { ClientsService.create(req.body)
    } catch (error) {
      next(error);
    }
  }

  static update (req: Request, res: Response, next: NextFunction) {
    try { ClientsService.update(req.params.id, req.body)
    } catch (error) {
      next(error);
    }
  }

  static deleteClient (req: Request, res: Response, next: NextFunction) {
    try { ClientsService.deleteClient(req.params.id)
    } catch (error) {
      next(error);
    }
  }
}

export default ClientsController;
