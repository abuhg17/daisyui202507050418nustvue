import axios from "axios";

export default defineEventHandler(async (event) => {
  const bvid = event.context.params?.bvid;

  if (!bvid) {
    return { error: "請提供 bvid 參數" };
  }

  try {
    const res = await axios.get(
      "https://api.bilibili.com/x/web-interface/view",
      {
        params: { bvid },
      }
    );

    const { pic, title, owner, stat, pages } = res.data.data;
    const { data } = res.data;
    const raw = data;
    const newdata = {};
    for (const key in raw) {
      if (typeof raw[key] !== "object") {
        newdata[key] = raw[key];
      }
    }

    return {
      pic,
      title,
      owner,
      stat,
      data: newdata,
      pages,
    };
  } catch (error) {
    return {
      error: "無法取得 Bilibili 資料",
      message: error.message,
      status: error.response?.status,
      response: error.response?.data,
    };
  }
});
