import {
  databases,
  databaseId,
  collectionId,
} from "../../utils/appwriteClient";

export default defineEventHandler(async (event) => {
  const { id } = event.context.params;
  const body = await readBody(event);

  console.log("收到原始資料：", body);

  // ✅ 只挑出允許更新的欄位（白名單）
  const allowedFields = ["name", "amount", "price", "shop", "todate"];
  const updateData = {};

  for (const key of allowedFields) {
    if (key in body) {
      updateData[key] = body[key];
    }
  }

  console.log("實際送出的更新資料：", updateData);

  try {
    const updated = await databases.updateDocument(
      databaseId,
      collectionId,
      id,
      updateData
    );
    return { message: "更新成功", document: updated };
  } catch (e) {
    console.error("更新失敗：", e);
    throw createError({ statusCode: 500, statusMessage: e.message });
  }
});
