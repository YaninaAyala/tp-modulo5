import ClientsModel from "../models/clients"

class ClientsService {
  static getAllClients() {
    try { ClientsModel.read()
    } catch (error) {
      throw error;
    }
  }

  static create (client) {
    try { ClientsModel.write("parámetro")
    } catch (error) {
        throw error;
    }
  }

  static update (id, data) {
    try { ClientsModel.write("parámetro")
    } catch (error) {
        throw error;
    }
  }

  static deleteClient (id) {
    try { ClientsModel.write("parámetro")
    } catch (error) {
        throw error;
    }
  }
}

export default ClientsService;
