// appwriteClient.js
import { Client, Databases, Storage, ID, Query } from "appwrite"; // <-- 在這裡引入 Query

const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1") // 你的 Appwrite 端點
  .setProject("680c76af0037a7d23e44"); // 你的專案 ID

const databases = new Databases(client);
const storage = new Storage(client);

const databaseId = "680c778b000f055f6409"; // 你的資料庫 ID
const collectionId = "6868f512003b1abedb72"; // 你的集合 ID

export { databases, databaseId, collectionId, ID, storage, Query }; // <-- 在這裡匯出 Query
