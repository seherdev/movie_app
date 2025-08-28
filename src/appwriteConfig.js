import { Client, Databases } from "appwrite";

const client = new Client()
  .setEndpoint('https://<BÖLGE>.cloud.appwrite.io/v1') // Appwrite endpoint
  .setProject('<PROJECT_ID>');                         // Proje ID'n

const databases = new Databases(client);
export { client, databases };
