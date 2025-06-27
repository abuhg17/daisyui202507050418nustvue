import axios from "axios";

export default defineEventHandler(async (event) => {
  const channelIdsParam = event.context.params?.channelIds;
  const apikey = "AIzaSyAUD7ipwX-VAIIgbtw4V6sHKOTfyWoPdMo";

  if (!channelIdsParam) {
    return { error: "請提供 channelIds 參數（可用逗號分隔多個）" };
  }

  const channelIds = channelIdsParam
    .split(",")
    .map((v) => v.trim())
    .filter((v) => v.length > 0);

  if (channelIds.length === 0 || channelIds.length > 50) {
    return { error: "頻道 ID 數量需介於 1 到 50 之間" };
  }

  try {
    const res = await axios.get(
      "https://www.googleapis.com/youtube/v3/channels",
      {
        params: {
          part: "snippet,statistics",
          id: channelIds.join(","),
          key: apikey,
        },
      }
    );

    const items = res.data?.items || [];

    if (items.length === 0) {
      return { error: "找不到任何頻道資料" };
    }

    return {
      count: items.length,
      items,
    };
  } catch (error) {
    return {
      error: "無法取得頻道資料",
      message: error.message,
      status: error.response?.status || null,
      response: error.response?.data || null,
    };
  }
});
