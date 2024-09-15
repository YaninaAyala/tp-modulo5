import ClientsModel from "../models/clients";

class ClientsService {
  static async getAllClients() {
    try {
      await ClientsModel.read();
    } catch (error) {
      throw error;
    }
  }

  static async create(client) {
    try {
      await ClientsModel.write("parámetro");
    } catch (error) {
      throw error;
    }
  }

  static async update(id, data) {
    try {
      await ClientsModel.write("parámetro");
    } catch (error) {
      throw error;
    }
  }

  static async deleteClient(id) {
    try {
      await ClientsModel.write("parámetro");
    } catch (error) {
      throw error;
    }
  }
}

export default ClientsService;
