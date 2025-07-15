import axios from "axios";

export default defineEventHandler(async (event) => {
  const url = getQuery(event).url;
  if (!url) {
    return { error: "請提供 url 參數" };
  }

  try {
    const response = await axios.get(url, {
      responseType: "stream",
      headers: {
        Referer: "https://www.bilibili.com/",
        // User-Agent 可以加上模擬瀏覽器，視需要
      },
    });

    event.node.res.setHeader("Content-Type", response.headers["content-type"]);
    event.node.res.setHeader("Cache-Control", "public, max-age=86400");
    return response.data; // 流直接回傳給前端
  } catch (err) {
    event.node.res.statusCode = 500;
    return { error: "圖片代理失敗", message: err.message };
  }
});
