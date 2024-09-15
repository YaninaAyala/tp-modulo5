import { NextFunction, Request, Response } from "express";
import ClientsService from "../services/clients";

class ClientsController {
  static async getAllClients(req: Request, res: Response, next: NextFunction) {
    try { await ClientsService.getAllClients()
    } catch (error) {
      next(error);
    }
  }

  static async create (req: Request, res: Response, next: NextFunction) {
    try { await ClientsService.create(req.body)
    } catch (error) {
      next(error);
    }
  }

  static async update (req: Request, res: Response, next: NextFunction) {
    try { await ClientsService.update(req.params.id, req.body)
    } catch (error) {
      next(error);
    }
  }

  static async deleteClient (req: Request, res: Response, next: NextFunction) {
    try { await ClientsService.deleteClient(req.params.id)
    } catch (error) {
      next(error);
    }
  }
}

export default ClientsController;
