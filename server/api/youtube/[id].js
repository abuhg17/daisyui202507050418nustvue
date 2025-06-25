import axios from "axios";

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id;
  const apikey = "AIzaSyARxObGJgbWeVUC2Jhal6ic-XbdJUfI-h0";

  if (!id) {
    return { error: "請提供 id 參數" };
  }

  try {
    const res = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${id}&key=${apikey}`
    );

    const item = res.data.items?.[0];

    if (!item) {
      return { error: "找不到該影片資料" };
    }

    const snippet = item.snippet;
    const statistics = item.statistics;

    return {
      snippet,
      statistics,
    };
  } catch (error) {
    return {
      error: "無法取得 Youtube 資料",
      message: error.message,
      status: error.response?.status,
      response: error.response?.data,
    };
  }
});
