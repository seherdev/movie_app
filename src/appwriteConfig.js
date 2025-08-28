// src/appwriteConfig.js
import { Client, Databases } from 'appwrite';

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1') // Appwrite panelinden aldığın endpoint
  .setProject('fra-68af8184001b54938b9a');     // Appwrite Project ID

const databases = new Databases(client);

export { client, databases };
