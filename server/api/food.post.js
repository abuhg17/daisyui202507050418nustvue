import formidable from "formidable";
import { createReadStream } from "fs";
import {
  databases,
  databaseId,
  collectionId,
  ID,
  storage,
} from "../utils/appwriteClient";

export default defineEventHandler(async (event) => {
  const form = formidable({ multiples: false });

  const { fields, files } = await new Promise((resolve, reject) => {
    form.parse(event.node.req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });

  console.log("fields:", fields);
  console.log("files:", files);

  const { name, amount, price, shop, todate } = fields;

  if (!name || !amount || !price || !shop || !todate) {
    throw createError({ statusCode: 400, statusMessage: "缺少必要欄位" });
  }
  let photoUrl = "";
  if (files.photo) {
    try {
      const fileStream = createReadStream(files.photo.filepath);
      console.log("嘗試上傳文件到 Appwrite Storage...");
      const fileRes = await storage.createFile(
        "6867c5280021205ba9c0", // 再次確認這個 Bucket ID 是否正確
        ID.unique(),
        fileStream
      );
      console.log("文件上傳成功，fileRes:", fileRes); // 如果成功，會印出這個
      photoUrl = storage.getFileView("6867c5280021205ba9c0", fileRes.$id).href;
    } catch (fileUploadError) {
      console.error(
        "文件上傳到 Appwrite Storage 失敗！錯誤訊息:",
        fileUploadError
      );
      // 這裡可以選擇重新拋出錯誤，或者處理它
      throw createError({
        statusCode: 500,
        statusMessage: `文件上傳失敗: ${fileUploadError.message}`,
      });
    }
  }

  try {
    const document = await databases.createDocument(
      databaseId,
      collectionId,
      ID.unique(),
      {
        name,
        amount: Number(amount),
        price: Number(price),
        shop,
        todate,
        photo: photoUrl,
      }
    );
    return { message: "新增成功", document };
  } catch (e) {
    throw createError({ statusCode: 500, statusMessage: e.message });
  }
});
