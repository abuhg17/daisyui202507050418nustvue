// server/api/food/name/[name].get.js
import {
  databases,
  databaseId,
  collectionId,
  Query,
} from "../../../utils/appwriteClient"; // 注意路徑層級

export default defineEventHandler(async (event) => {
  try {
    const foodName = decodeURIComponent(event.context.params.name);

    if (!foodName) {
      throw createError({ statusCode: 400, statusMessage: "缺少餐點名稱參數" });
    }

    const res = await databases.listDocuments(databaseId, collectionId, [
      Query.equal("name", foodName),
    ]);

    return res.documents;
  } catch (e) {
    console.error("獲取餐點失敗:", e);
    throw createError({
      statusCode: 500,
      statusMessage: e.message || "獲取餐點失敗",
    });
  }
});
