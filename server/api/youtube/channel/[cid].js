import axios from "axios";

export default defineEventHandler(async (event) => {
  const cid = event.context.params?.cid;
  // const apikey = "AIzaSyARxObGJgbWeVUC2Jhal6ic-XbdJUfI-h0";
  const apikey = "AIzaSyCoQlxwpekkNagIuYiBpJLDlWr2BjmoGXw";

  if (!cid) {
    return { error: "請提供 cid 參數" };
  }

  try {
    const res = await axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${cid}&key=${apikey}`
    );

    const raw = res.data;
    const items = raw.items[0];

    if (!items) {
      return { error: "找不到該頻道資料" };
    }

    return {
      items,
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
