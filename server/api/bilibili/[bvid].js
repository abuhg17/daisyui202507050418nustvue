import axios from "axios";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const bvid = query.bvid || "BV1BELHzyEMi";

  try {
    const res = await axios.get(
      "https://api.bilibili.com/x/web-interface/view",
      {
        params: { bvid },
      }
    );

    return {
      title: res.data.data.title,
      owner: res.data.data.owner.name,
      view: res.data.data.stat.view,
      like: res.data.data.stat.like,
    };
  } catch (error) {
    return { error: "無法取得 Bilibili 資料", detail: error.message };
  }
});
