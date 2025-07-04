<template>
  <div class="max-w-7xl mx-auto p-4">
    <h1 class="text-3xl font-bold mb-6 text-center">Youtube Page</h1>

    <div
      v-if="isLoading"
      class="loading-container text-center text-lg font-medium mb-4"
    >
      載入中... ({{ loadedCount }}/{{ totalCount }})
    </div>

    <div v-else class="overflow-x-auto">
      <table
        class="table table-zebra table-compact w-full border border-gray-300"
      >
        <thead>
          <tr class="bg-gray-100">
            <th class="text-center">#</th>
            <th class="text-center">頻道縮圖</th>
            <th class="text-center">影片縮圖</th>
            <th class="text-center">觀看數</th>
            <th class="text-center">喜歡數</th>
            <th class="text-center">發布日期</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in youtubes" :key="item.items.id">
            <td class="text-center">{{ index + 1 }}</td>
            <td class="text-center">
              <a
                v-if="item.channel"
                :href="`https://www.youtube.com/channel/${item.channel.id}`"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  :src="item.channel.snippet.thumbnails.medium.url"
                  :alt="item.channel.snippet.title"
                  class="mx-auto rounded"
                  width="100"
                />
              </a>
              <span v-else>無頻道縮圖</span>
            </td>
            <td class="text-center">
              <a
                :href="`https://www.youtube.com/watch?v=${item.items.id}`"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  :src="item.items.snippet.thumbnails.medium.url"
                  :alt="item.items.snippet.title"
                  class="mx-auto rounded"
                  width="150"
                />
              </a>
            </td>
            <td class="text-right font-mono">
              {{ Number(item.items.statistics.viewCount).toLocaleString() }}
            </td>
            <td class="text-right font-mono">
              {{
                item.items.statistics.likeCount
                  ? Number(item.items.statistics.likeCount).toLocaleString()
                  : "無"
              }}
            </td>
            <td class="text-center">
              {{ item.items.snippet.publishedAt.substr(0, 10) }}
            </td>
          </tr>
        </tbody>
      </table>

      <button
        @click="clearCache"
        class="btn btn-ghost mt-6 block mx-auto text-lg"
      >
        清除快取並重新載入
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const arrs = [
  "hIjIt3yU8aA",
  "zy1sDJcwLw8",
  "TmbWEcs_4k0",
  "04t_L8Okvbg",
  "XUa9d7E081A",
  "9eGkn0jhS8A",
  "BV1uoMCzkE5Y",
  "s94P7jmEspQ",
  "WS3sGVgkOZk",
  "KqKVBSHtCJU",
  "5zcqr8dxgGw",
  "u1rZFCNfR2I",
  "hnl-44mXdKI",
  "wA9kWUP65jo",
  "_ckik6l8LGE",
  "uVjKn92u35A",
  "Hv8K31xVlGI",
  "iiriaDJuoXA",
  "1UwmdF9MPSs",
  "tXAr4L0Txhc",
  "cTsgN88eFao",
  "dOjrpAxIpOc",
  "SKx1sDSdlDc",
  "Q_b2q2psDAE",
  "WH297WZaU7M",
  "Ro8QCl_TwAQ",
  "e1AWBS-RS-I",
  "wW0fZhdjrGM",
  "bBA95gwfcXA",
  "7PfL5w6selY",
  "k6pHuMP6ObU",
  "7jPFzlxj3qQ",
  "LGpQs_dOxYw",
  "Ftw4vkl_V0s",
  "h7LtLEgcHYc",
  "qLZ4P1x3jPA",
  "L0VvGDA2pOc",
  "OnnI9rLy7R4",
  "ASdEPhr7zVg",
  "8UYEwfodabA",
  "nmq3I-8Izus",
  "2egSi1HBrxg",
  "uKBI1Ea8VO0",
  "Z-h6O_2IYRo",
  "gNypi17ruog",
  "Yt9-vuUy1gM",
  "Hp7GR9TSd4w",
  "jtRU5ZhFdyc",
  "54NMP1D9mZk",
  "7LDeFRHnjAA",
  "mVW8uH2k7So",
  "oYFva7DxBdo",
  "oPyp6fDcpdc",
  "vGRE-aBmIPg",
  "wFtZE0eL6ts",
  "bTue_88ef6o",
  "E15_2rMaWVM",
  "sLllWRwLQrg",
  "VzR3mI6X84E",
  "B3Bt0DC5svw",
  "7bXgLbEOoFg",
  "FaNxTh50UH8",
  "Td8YEuqyRxw",
  "u2SI5wgNmxg",
  "Y8BDihOv7Go",
  "1vLoO_DonRE",
  "XK0KBZKvts4",
  "gIRB3y_8hRc",
  "fkp8CqZrkW4",
  "F9YJ2YB3a3E",
  "Ihi1mhMYLR0",
  "IQ8ZjEFW6Cw",
  "w3-CT_aiZxQ",
  "AAwiJKy1Xzw",
  "-4ADGW7TE0Q",
  "sMinmwkE7mY",
];

const youtubes = ref([]);
const isLoading = ref(false);
const loadedCount = ref(0);
const totalCount = ref(arrs.length);
const MAX_BATCH_SIZE = 50;

const CACHE_KEY = "youtube-videos";
const CACHE_TIMESTAMP_KEY = "youtube-videos-timestamp";
const CACHE_EXPIRATION_MS = 1000 * 60 * 60 * 12; // 12 小時

// 快取讀取，會檢查過期與版本
function getCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    const time = localStorage.getItem(CACHE_TIMESTAMP_KEY);
    if (!raw || !time) return null;

    const cacheTime = parseInt(time);
    const FORCE_CLEAR_BEFORE = new Date("2025-06-27T21:33:00+08:00").getTime();

    if (cacheTime < FORCE_CLEAR_BEFORE) {
      localStorage.removeItem(CACHE_KEY);
      localStorage.removeItem(CACHE_TIMESTAMP_KEY);
      return null;
    }

    if (Date.now() - cacheTime > CACHE_EXPIRATION_MS) return null;

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return null;

    // 快取影片數是否合理，不合理清除
    if (parsed.length < totalCount.value * 0.5) return null;

    return parsed;
  } catch {
    return null;
  }
}

function setCache(data) {
  localStorage.setItem(CACHE_KEY, JSON.stringify(data));
  localStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString());
}

// API 請求，帶重試
async function fetchWithRetry(url, maxRetries = 3, delayMs = 500) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const res = await useFetch(url);
      if (!res.data.value) throw new Error("無資料");
      return res.data.value;
    } catch (e) {
      console.warn(`第${attempt}次請求失敗: ${url}`, e);
      if (attempt === maxRetries) throw e;
      await new Promise((r) => setTimeout(r, delayMs));
    }
  }
}

async function loadData() {
  isLoading.value = true;
  youtubes.value = [];
  loadedCount.value = 0;

  const cached = getCache();
  if (cached && cached.length) {
    youtubes.value = cached;
    loadedCount.value = cached.length;
    isLoading.value = false;
    return;
  }

  for (let start = 0; start < arrs.length; start += MAX_BATCH_SIZE) {
    const batch = arrs.slice(start, start + MAX_BATCH_SIZE);

    try {
      const data = await fetchWithRetry(
        `/api/youtube/videos/${batch.join(",")}`
      );

      if (!data.items || !data.items.length) {
        console.warn(`批次無影片資料: ${start} ~ ${start + batch.length - 1}`);
        // 仍更新 loadedCount 但不加入影片數量
        loadedCount.value += 0;
        continue;
      }

      const channelIds = [
        ...new Set(data.items.map((v) => v.snippet.channelId)),
      ];
      const channelData = await fetchWithRetry(
        `/api/youtube/channel/${channelIds.join(",")}`
      );

      const channelMap = new Map();
      channelData.items?.forEach((c) => {
        channelMap.set(c.id, c);
      });

      data.items.forEach((videoItem) => {
        youtubes.value.push({
          items: videoItem,
          channel: channelMap.get(videoItem.snippet.channelId) || null,
        });
      });

      // 實際新增的影片數量
      loadedCount.value = youtubes.value.length;

      // 每批結束時，先更新快取，避免中途失敗導致下次還讀到不完整資料
      setCache(youtubes.value);
    } catch (error) {
      console.error(
        `批次讀取失敗: ${start} ~ ${start + batch.length - 1}`,
        error
      );
      // 這批跳過，不增加 loadedCount
    }

    // 稍微延遲避免 API 速率限制
    await new Promise((r) => setTimeout(r, 500));
  }

  isLoading.value = false;
}

function clearCache() {
  localStorage.removeItem(CACHE_KEY);
  localStorage.removeItem(CACHE_TIMESTAMP_KEY);
  youtubes.value = [];
  loadedCount.value = 0;
  isLoading.value = true;
  loadData();
}

onMounted(() => {
  loadData();
});
</script>

<style scoped>
.loading-container {
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
