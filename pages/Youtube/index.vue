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
            <th class="text-right">觀看數</th>
            <th class="text-right">喜歡數</th>
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
              <img
                :src="item.items.snippet.thumbnails.medium.url"
                :alt="item.items.snippet.title"
                class="mx-auto rounded cursor-pointer"
                width="150"
                @click="openPlayer(item.items.id)"
              />
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

    <!-- Plyr Modal -->
    <div
      v-if="showPlayer"
      class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      @click.self="closePlayer"
    >
      <div
        class="bg-black rounded-lg relative"
        style="width: 333px; height: 333px"
      >
        <button
          @click="closePlayer"
          class="absolute top-2 right-2 z-50 text-white text-3xl font-bold"
          aria-label="Close Player"
        >
          &times;
        </button>

        <!-- 播放器容器 -->
        <div id="plyr-player" style="width: 200%; height: 100%"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, onBeforeUnmount } from "vue";
import Plyr from "plyr";
import "plyr/dist/plyr.css";

const arrs = [
  "m2wqrdK98tE",
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
  "DtGQpay-dwE",
  "iiriaDJuoXA",
  "AwLv5-ez7Bc",
  "tXAr4L0Txhc",
  "cTsgN88eFao",
  "dOjrpAxIpOc",
  "SKx1sDSdlDc",
  "Q_b2q2psDAE",
  "WH297WZaU7M",
  "hyDPWvh0VGE",
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

const showPlayer = ref(false);
const currentVideoId = ref(null);
let plyrInstance = null;

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

// 使用 Nuxt 3 的 useFetch (或你自己的 fetch 方式)
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

      loadedCount.value = youtubes.value.length;

      setCache(youtubes.value);
    } catch (error) {
      console.error(
        `批次讀取失敗: ${start} ~ ${start + batch.length - 1}`,
        error
      );
    }

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

async function openPlayer(id) {
  currentVideoId.value = id;
  showPlayer.value = true;

  await nextTick();

  if (!plyrInstance && process.client) {
    const PlyrModule = await import("plyr");
    const Plyr = PlyrModule.default;

    const container = document.getElementById("plyr-player");
    container.innerHTML = `<iframe
      src="https://www.youtube.com/embed/${id}?origin=${window.location.origin}&autoplay=1&modestbranding=1&rel=0&showinfo=0"
      allow="autoplay; fullscreen"
      allowfullscreen
      allowtransparency="true"
      frameborder="0"
      width="100%"
      height="100%"
      ></iframe>`;

    plyrInstance = new Plyr(container.querySelector("iframe"), {
      controls: [
        "play-large",
        "play",
        "progress",
        "current-time",
        "mute",
        "volume",
        "settings",
        "fullscreen",
      ],
      youtube: {
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
      },
    });
  }
}

function closePlayer() {
  showPlayer.value = false;

  if (plyrInstance) {
    plyrInstance.destroy();
    plyrInstance = null;
  }

  currentVideoId.value = null;

  const container = document.getElementById("plyr-player");
  if (container) container.innerHTML = "";
}

onMounted(() => {
  loadData();
});

onBeforeUnmount(() => {
  if (plyrInstance) plyrInstance.destroy();
});
</script>

<style scoped>
.loading-container {
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Modal 背景與播放器 */
.fixed.inset-0 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.bg-black.bg-opacity-70 {
  background-color: rgba(0, 0, 0, 0.7);
}

.flex.items-center.justify-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.z-50 {
  z-index: 50;
}

.bg-black.rounded-lg {
  background-color: black;
  border-radius: 0.5rem;
}

.max-w-4xl {
  max-width: 56rem;
}

.aspect-video {
  position: relative;
  padding-top: 56.25%; /* 16:9 */
  height: 0;
}

.aspect-video > div,
.aspect-video iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

button[aria-label="Close Player"] {
  cursor: pointer;
}

button[aria-label="Close Player"]:hover {
  color: #ff0000;
}
</style>
