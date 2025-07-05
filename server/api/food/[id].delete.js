import {
  databases,
  databaseId,
  collectionId,
} from "../../utils/appwriteClient";

export default defineEventHandler(async (event) => {
  const { id } = event.context.params;

  try {
    await databases.deleteDocument(databaseId, collectionId, id);
    return { message: "刪除成功" };
  } catch (e) {
    throw createError({ statusCode: 500, statusMessage: e.message });
  }
});
