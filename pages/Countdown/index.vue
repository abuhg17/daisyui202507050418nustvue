<template>
  <h1>This is Countdown Page.</h1>
  <h2>First, fetch /api/countdown/202507050418 once.</h2>
  <h2>Second, setInterval every one sec.</h2>
  <div
    class="flex justify-center items-center min-h-screen bg-gradient-to-r from-red-800 via-black to-indigo-900 p-6"
  >
    <div class="flex flex-col items-center gap-8 max-w-4xl w-full">
      <!-- 警示卡片群 -->
      <div class="flex flex-wrap justify-center gap-6">
        <div
          class="card w-64 bg-red-600 text-white shadow-xl hover:scale-105 transition duration-200 cursor-help"
          title="強震與氣象風險增加，請提高警覺"
        >
          <div class="card-body items-center text-center">
            <h2 class="card-title text-xl">⚠️ 關東要注意</h2>
          </div>
        </div>

        <div
          class="card w-64 bg-red-500 text-white shadow-xl hover:scale-105 transition duration-200 cursor-help"
          title="台北地區可能受影響，請留意官方發布"
        >
          <div class="card-body items-center text-center">
            <h2 class="card-title text-xl">🔴 臺北要注意</h2>
          </div>
        </div>

        <div
          class="card w-64 bg-green-600 text-white shadow-xl hover:scale-105 transition duration-200 cursor-help"
          title="目前屬於相對穩定區域"
        >
          <div class="card-body items-center text-center">
            <h2 class="card-title text-xl">🟢 中壢相對安全</h2>
            <p>2025紫微聖人加持(神仙思維)</p>
          </div>
        </div>
      </div>

      <!-- 正式起跑敘述 -->
      <div class="text-center text-yellow-300 space-y-2 px-4 max-w-xl">
        <p class="text-2xl font-bold tracking-widest">
          🕓 2025/07/05 04:18 三災八難正式啟動
        </p>
        <p class="text-lg leading-relaxed text-pink-200">
          ☄️下元甲子:至2043<br />
          ☄️三界六道抓交替<br />
          ☄️考核標準:人心<br />
          ☄️1923:1%人口(基準點)<br />
          ☄️2025:?%人口(上界如何看待下界的衡量點)
          <br />☄️1999:0.5%人口(基準點)<br />
          ☄️2025:?%人口(上界如何看待下界的衡量點)<br />
          ☄️房子防自然不防超自然<br />
          ☄️1850:牛樹梅(基準點)<br />
          ☄️2025:第1屆至第8屆臺北市長?(上界如何看待下界的衡量點)<br />
          ☄️2038:第12屆臺北市長?(草包鋒兄?)<br />
          ☄️202507050418取代20250726:超自然大罷免<br />
        </p>
      </div>

      <!-- 倒數計時卡片 -->
      <div
        class="card shadow-xl bg-black bg-opacity-80 text-white w-max px-10 py-6 rounded-lg"
      >
        <h2
          class="card-title text-4xl font-semibold mb-6 text-center tracking-widest select-none"
        >
          倒數計時
        </h2>
        <p
          v-if="totalSeconds > 0"
          class="font-mono tracking-wide select-none text-3xl sm:text-4xl md:text-5xl flex gap-6 justify-center items-center whitespace-nowrap"
        >
          <span>{{ pad(day) }}天</span>
          <span>{{ pad(hour) }}時</span>
          <span>{{ pad(minute) }}分</span>
          <span>{{ pad(second) }}秒</span>
        </p>
        <p
          v-else
          class="text-3xl text-yellow-400 font-bold text-center animate-pulse"
        >
          🎉 時間已結束！
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from "vue";

// API 載入倒數初始值 (Nuxt 3 useFetch)
const {
  data: countdown,
  pending,
  error,
} = await useFetch("/api/countdown/202507050418");

const totalSeconds = ref(0);
let intervalId = null;

// 監聽 countdown 回來資料，初始化秒數
watch(
  () => countdown.value,
  (val) => {
    if (val) {
      totalSeconds.value =
        val.diffday * 86400 +
        val.diffhour * 3600 +
        val.diffminute * 60 +
        val.diffsecond;
    }
  },
  { immediate: true }
);

// 計時器啟動與停止
onMounted(() => {
  intervalId = setInterval(() => {
    if (totalSeconds.value > 0) {
      totalSeconds.value--;
    } else {
      clearInterval(intervalId);
      intervalId = null;
    }
  }, 1000);
});

onBeforeUnmount(() => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
});

// 分解秒數成日時分秒
const day = computed(() => Math.floor(totalSeconds.value / 86400));
const hour = computed(() => Math.floor((totalSeconds.value % 86400) / 3600));
const minute = computed(() => Math.floor((totalSeconds.value % 3600) / 60));
const second = computed(() => totalSeconds.value % 60);

// 補零
const pad = (num) => num.toString().padStart(2, "0");
</script>
