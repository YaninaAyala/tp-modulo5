import { writeFileSync, readFileSync, } from "jsonfile";

class ClientsModel {
  static write(data) {
    try {
      writeFileSync("../database/clients.json", data);
      return true;
    } catch (error) {
      throw error;
    }
  }

  static read() {
    try {
      const db = readFileSync("../database/clients.json");
      return db;
    } catch (error) {
      throw error;
    }
  }
}

export default ClientsModel;
