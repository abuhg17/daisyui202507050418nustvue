// server/api/food/shop/[shop].get.js
import {
  databases,
  databaseId,
  collectionId,
  Query,
} from "../../../utils/appwriteClient"; // 注意路徑層級

export default defineEventHandler(async (event) => {
  try {
    const shopName = decodeURIComponent(event.context.params.shop);

    if (!shopName) {
      throw createError({ statusCode: 400, statusMessage: "缺少店家名稱參數" });
    }

    const res = await databases.listDocuments(databaseId, collectionId, [
      Query.equal("shop", shopName),
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
