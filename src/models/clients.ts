import { writeFile, readFile, } from "jsonfile";

class ClientsModel {
  static async write(data) {
    try {
      await writeFile("./dist/database/clients.json", data);
      return true;
    } catch (error) {
      throw error;
    }
  }

  static async read() {
    try {
      const db = await readFile("./dist/database/clients.json");
      return db;
    } catch (error) {
      throw error;
    }
  }
}

export default ClientsModel;
