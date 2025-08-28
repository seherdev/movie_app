// src/setupDatabase.js
import { Client, Databases, ID, Permission, Role } from 'appwrite';

const client = new Client();
client
  .setEndpoint('https://cloud.appwrite.io/v1') // kendi endpoint'in
  .setProject('PROJE_ID')                      // kendi project ID'in

const databases = new Databases(client);

// ✅ 1. Veritabanı oluştur
async function createDatabase() {
  try {
    const res = await databases.createDatabase(ID.unique(), 'moviesDB');
    console.log('Database created:', res);
    return res.$id; // database id
  } catch (err) {
    console.error('Database error:', err.message);
  }
}

// ✅ 2. Koleksiyon oluştur
async function createCollection(databaseId) {
  try {
    const res = await databases.createCollection(
      databaseId,
      ID.unique(),
      'favorites',
      [
        Permission.read(Role.any()),
        Permission.write(Role.any())
      ]
    );
    console.log('Collection created:', res);
  } catch (err) {
    console.error('Collection error:', err.message);
  }
}

// ✅ 3. Çalıştır
createDatabase().then((dbId) => {
  if (dbId) createCollection(dbId);
});
