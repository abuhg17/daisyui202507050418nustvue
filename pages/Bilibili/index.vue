<template>
  <div class="max-w-7xl mx-auto p-4">
    <h1 class="text-3xl font-bold mb-6 text-center">Bilibili Page</h1>

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
          <tr class="bg-gray-100 text-center">
            <th>#</th>
            <th>頻道頭像</th>
            <th>影片封面</th>
            <th>首幀圖</th>
            <th>觀看數</th>
            <th>彈幕數</th>
            <th>喜歡數</th>
            <th>硬幣數</th>
            <th>收藏數</th>
            <th>分享數</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, idx) in bilibilis"
            :key="item.data?.bvid || idx"
            class="text-center align-middle"
          >
            <td>{{ idx + 1 }}</td>
            <td>
              <a
                v-if="item.owner"
                :href="`https://space.bilibili.com/${item.owner.mid}/upload/video`"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  :src="`/api/bilibili/proxyimg?url=${encodeURIComponent(
                    item.owner.face
                  )}`"
                  :alt="item.owner.name"
                  :title="item.owner.name"
                  class="mx-auto rounded-full"
                  width="80"
                  height="80"
                />
              </a>
              <span v-else>無頭像</span>
            </td>
            <td>
              <a
                v-if="item.data"
                :href="`https://www.bilibili.com/video/${item.data.bvid}`"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  :src="`/api/bilibili/proxyimg?url=${encodeURIComponent(
                    item.pic
                  )}`"
                  :alt="item.title"
                  :title="item.title"
                  class="mx-auto rounded"
                  width="150"
                  height="auto"
                />
              </a>
              <span v-else>無影片封面</span>
            </td>
            <td>
              <img
                v-if="
                  item.pages && item.pages.length && item.pages[0].first_frame
                "
                :src="`/api/bilibili/proxyimg?url=${encodeURIComponent(
                  item.pages[0].first_frame
                )}`"
                class="mx-auto rounded"
                width="150"
                height="auto"
                alt="首幀圖"
              />
              <span v-else>無首幀圖</span>
            </td>
            <td class="text-right font-mono">
              {{ item.stat?.view?.toLocaleString() || "-" }}
            </td>
            <td class="text-right font-mono">
              {{ item.stat?.danmaku?.toLocaleString() || "-" }}
            </td>
            <td class="text-right font-mono">
              {{ item.stat?.like?.toLocaleString() || "-" }}
            </td>
            <td class="text-right font-mono">
              {{ item.stat?.coin?.toLocaleString() || "-" }}
            </td>
            <td class="text-right font-mono">
              {{ item.stat?.favorite?.toLocaleString() || "-" }}
            </td>
            <td class="text-right font-mono">
              {{ item.stat?.share?.toLocaleString() || "-" }}
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
  "BV1pJKBz1ELn",
  "BV1BELHzyEMi",
  "BV1Et4y1r7Eu",
  "BV1rSNvzeEPt",
  "BV1RkT2zREai",
  "BV1JtNXzkEFN",
  "BV1Dc2VYkEce",
  "BV1VpTpzHEcT",
  "BV1PpZ2YoEtU",
  "BV1WiNkz4EZM",
  "BV1a5E1zLE2u",
  "BV1WmCpYHE5C",
  "BV1M6NBeZEVu",
  "BV1XXNiznE4X",
  "BV1pSLgz9EnQ",
  "BV13j421o7mz",
  "BV1ZS4y1R7q9",
  "BV1Ur4y1r72B",
  "BV15y421B7FC",
  "BV1ytKHzNEDo",
  "BV1esKuzUEkG",
  "BV1qEVazqEv3",
  "BV1ogJhz1EbJ",
  "BV1i3MLzzEjY",
  "BV1PsT2zME58",
  "BV1dTRrYDEqJ",
  "BV11cdcY4EbG",
  "BV11TJ8zZEUR",
  "BV1yQfWYaEVo",
  "BV1ivM8zJEUg",
  "BV1y8KWzrEsx",
  "BV1YGMmzFEXv",
  "BV1uEyuYZEYW",
  "BV1ud4y1Q7Dd",
  "BV1R5N9zgE1t",
  "BV1QdfnYwEFc",
  "BV17tNXzkEDy",
  "BV1DFfWYTEz3",
  "BV1FqfnYLE1v",
  "BV1K2jnz8E8Q",
  "BV1cvfpYsEiJ",
  "BV12BNdzaEo1",
  "BV1Fv4y1g7Cc",
  "BV1AGfWYFEaY",
  "BV1qTTTzjE5T",
  "BV1qaTdzWELF",
  "BV1UeK8zAEgM",
  "BV1DaMyzmEgc",
  "BV1ACTezqEZ9",
  "BV1HsTyz8EBL",
  "BV1HBMmz3Ehp",
  "BV1dQKGzoEVA",
  "BV1aFK4zfEjT",
  "BV1o2KgzpEuv",
  "BV1mGK7zfEqT",
  "BV1egTzzeEu4",
  "BV1BBKJzSEaM",
  "BV1CUMHzBE3L",
  "BV11KK3zzEL1",
  "BV1c6KGzKEk2",
  "BV1YgM3z9EJ3",
  "BV1zEKuzXENd",
  "BV1eTKYzEE2g",
  "BV1JhMEzWEFQ",
  "BV1bqMczxEoG",
  "BV1jsMAzGE2a",
  "BV1AYNLzyErV",
  "BV16PMSzGETR",
  "BV1hrKVzWEsP",
  "BV1SAMtzYE3M",
  "BV18V4y1j7ja",
  "BV13W4y1U7NP",
  "BV1vFKbzqED1",
  "BV1mM4m167tL",
  "BV1MgEjzxEfv",
];

const bilibilis = ref([]);
const isLoading = ref(false);
const loadedCount = ref(0);
const totalCount = ref(arrs.length);

const CACHE_KEY = "bilibili_cache_data";
const CACHE_TIME_KEY = "bilibili_cache_time";
const CACHE_ARRS_KEY = "bilibili_cache_arrs_key";
const CACHE_TTL = 1000 * 60 * 60 * 24; // 1 天

// ✅ 清除 2025/07/05 04:18（台灣時間）之前的快取
// const FORCE_CLEAR_BEFORE_TW = new Date("2025-07-25T04:18:00+08:00").getTime();
const FORCE_CLEAR_BEFORE_TW = new Date("2025-06-27T21:33:00+08:00").getTime();

function arrsToKey(arr) {
  return JSON.stringify(arr);
}

function getCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    const time = localStorage.getItem(CACHE_TIME_KEY);
    const arrsKey = localStorage.getItem(CACHE_ARRS_KEY);
    if (!raw || !time || !arrsKey) return null;
    if (arrsKey !== arrsToKey(arrs)) return null;

    const parsedTime = parseInt(time);
    if (isNaN(parsedTime)) return null;

    // 強制清除 2025/06/28 前的快取
    if (parsedTime < FORCE_CLEAR_BEFORE_TW) return null;

    if (Date.now() - parsedTime > CACHE_TTL) return null;

    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function setCache(data) {
  localStorage.setItem(CACHE_KEY, JSON.stringify(data));
  localStorage.setItem(CACHE_TIME_KEY, Date.now().toString());
  localStorage.setItem(CACHE_ARRS_KEY, arrsToKey(arrs));
}

async function loadData() {
  isLoading.value = true;
  loadedCount.value = 0;
  bilibilis.value = [];

  const cache = getCache();
  if (cache && Array.isArray(cache) && cache.length) {
    bilibilis.value = cache;
    loadedCount.value = cache.length;
    isLoading.value = false;
    return;
  }

  for (let i = 0; i < arrs.length; i++) {
    const bvid = arrs[i];
    try {
      const res = await fetch(`/api/bilibili/${bvid}`);
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      const json = await res.json();
      bilibilis.value.push(json);
    } catch (e) {
      bilibilis.value.push({ bvid, error: "載入失敗" });
    }
    loadedCount.value = i + 1;
    await new Promise((r) => setTimeout(r, 300));
  }

  setCache(bilibilis.value);
  isLoading.value = false;
}

function clearCache() {
  localStorage.removeItem(CACHE_KEY);
  localStorage.removeItem(CACHE_TIME_KEY);
  localStorage.removeItem(CACHE_ARRS_KEY);
  bilibilis.value = [];
  loadedCount.value = 0;
  isLoading.value = true;
  loadData();
}

onMounted(() => {
  loadData();
});
</script>

<style scoped>
/* 你可以用 tailwind 風格，這裡只簡單調整 */
.loading-container {
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
