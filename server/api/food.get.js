import { databases, databaseId, collectionId } from "../utils/appwriteClient";

export default defineEventHandler(async () => {
  try {
    const res = await databases.listDocuments(databaseId, collectionId);
    return res.documents; // 只回傳 documents 陣列
  } catch (e) {
    throw createError({ statusCode: 500, statusMessage: e.message });
  }
});
