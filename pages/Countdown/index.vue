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
          title="日本東京首都圈大地震"
        >
          <div class="card-body items-center text-center">
            <h2 class="card-title text-xl">
              ⚠️<br />2025/07/05 04:18<br />日本東京(當地時間)
            </h2>
          </div>
        </div>

        <div
          class="card w-64 bg-red-500 text-white shadow-xl hover:scale-105 transition duration-200 cursor-help"
          title="臺灣臺北首都圈大地震"
        >
          <div class="card-body items-center text-center">
            <h2 class="card-title text-xl">
              🔴<br />2025/07/05 04:18<br />臺灣臺北(當地時間)
            </h2>
          </div>
        </div>

        <div
          class="card w-64 bg-green-600 text-white shadow-xl hover:scale-105 transition duration-200 cursor-help"
          title="2025年紫微聖人所在地"
        >
          <div class="card-body items-center text-center">
            <h2 class="card-title text-xl">🟢 中壢相對安全</h2>
            <p>最討厭中壢人口翻倍成長</p>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap justify-center gap-6">
        <div
          class="card w-64 bg-yellow-600 text-white shadow-xl hover:scale-105 transition duration-200 cursor-help"
          title="憑空冒出因果故事"
        >
          <div class="card-body items-center text-center">
            <h2 class="card-title text-xl">
              <a
                href="https://www.google.com/search?q=%E5%AF%A7%E9%81%A0%E5%BA%9C%E7%9F%A5%E5%BA%9C+%E7%89%9B%E6%A8%B9%E6%A2%85+%E8%A5%BF%E6%98%8C%E5%9C%B0%E9%9C%87%E7%B4%80%E8%AE%8A"
                target="_blank"
                rel="noopener noreferrer"
                >寧遠府知府 牛樹梅 西昌地震紀變</a
              >
            </h2>
          </div>
        </div>
        <div
          class="card w-64 bg-yellow-600 text-white shadow-xl hover:scale-105 transition duration-200 cursor-help"
          title="AI也懂因果"
        >
          <div class="card-body items-center text-center">
            <h2 class="card-title text-xl">
              <a
                href="https://chatgpt.com/share/685ae737-c4c0-800e-810a-1f8c00a07c25"
                target="_blank"
                rel="noopener noreferrer"
                >ChatGPT 因果故事</a
              >
            </h2>
          </div>
        </div>
        <div
          class="card w-64 bg-yellow-600 text-white shadow-xl hover:scale-105 transition duration-200 cursor-help"
          title="AI也懂因果"
        >
          <div class="card-body items-center text-center">
            <h2 class="card-title text-xl">
              <a
                href="https://manus.im/share/2auIPkvMmOKpSpe5D4kv0R?replay=1"
                target="_blank"
                rel="noopener noreferrer"
                >manus</a
              >
            </h2>
          </div>
        </div>
        <div
          class="card w-64 bg-yellow-600 text-white shadow-xl hover:scale-105 transition duration-200 cursor-help"
          title="AI也懂因果"
        >
          <div class="card-body items-center text-center">
            <h2 class="card-title text-xl">
              <a
                href="https://claude.ai/public/artifacts/411073ac-b180-4a9d-b678-49df795f9965"
                target="_blank"
                rel="noopener noreferrer"
                >Claude</a
              >
            </h2>
          </div>
        </div>
        <div
          class="card w-64 bg-yellow-600 text-white shadow-xl hover:scale-105 transition duration-200 cursor-help"
          title="AI也懂因果"
        >
          <div class="card-body items-center text-center">
            <h2 class="card-title text-xl">
              <a
                href="https://chat.deepseek.com/a/chat/s/b8b597a2-d738-4b31-9703-edd17f135e82"
                target="_blank"
                rel="noopener noreferrer"
                >Deepseek</a
              >
            </h2>
          </div>
        </div>
        <div
          class="card w-64 bg-yellow-600 text-white shadow-xl hover:scale-105 transition duration-200 cursor-help"
          title="AI也懂因果"
        >
          <div class="card-body items-center text-center">
            <h2 class="card-title text-xl">
              <a
                href="https://gemini.google.com/app/dc2990327997c008"
                target="_blank"
                rel="noopener noreferrer"
                >gemini</a
              >
            </h2>
          </div>
        </div>
        <div
          class="card w-64 bg-yellow-600 text-white shadow-xl hover:scale-105 transition duration-200 cursor-help"
          title="AI也懂因果"
        >
          <div class="card-body items-center text-center">
            <h2 class="card-title text-xl">
              <a
                href="https://copilot.microsoft.com/shares/MyhwiUMezbSBUme1TigC5"
                target="_blank"
                rel="noopener noreferrer"
                >copilot</a
              >
            </h2>
          </div>
        </div>
        <div
          class="card w-64 bg-yellow-600 text-white shadow-xl hover:scale-105 transition duration-200 cursor-help"
          title="AI也懂因果"
        >
          <div class="card-body items-center text-center">
            <h2 class="card-title text-xl">
              <a
                href="https://grok.com/share/bGVnYWN5_4737d654-df3b-44a2-afca-092dca721bf7"
                target="_blank"
                rel="noopener noreferrer"
                >grok</a
              >
            </h2>
          </div>
        </div>
        <div
          class="card w-64 bg-yellow-600 text-white shadow-xl hover:scale-105 transition duration-200 cursor-help"
          title="AI也懂因果"
        >
          <div class="card-body items-center text-center">
            <h2 class="card-title text-xl">
              <a
                href="https://www.perplexity.ai/search/zhuan-xie-huang-feng-zhong-li-j4d5LyfSRnOFa.o0nrCptg"
                target="_blank"
                rel="noopener noreferrer"
                >perplexity</a
              >
            </h2>
          </div>
        </div>
        <div
          class="card w-64 bg-yellow-600 text-white shadow-xl hover:scale-105 transition duration-200 cursor-help"
          title="AI也懂因果"
        >
          <div class="card-body items-center text-center">
            <h2 class="card-title text-xl">
              <a
                href="https://huggingface.co/chat/conversation/685aea13758a23fdbf37c961"
                target="_blank"
                rel="noopener noreferrer"
                >huggingface</a
              >
            </h2>
          </div>
        </div>
        <div
          class="card w-64 bg-yellow-600 text-white shadow-xl hover:scale-105 transition duration-200 cursor-help"
          title="AI也懂因果"
        >
          <div class="card-body items-center text-center">
            <h2 class="card-title text-xl">
              <a
                href="https://chat.mistral.ai/chat/4a587e02-bdaf-45d0-b658-9e809811eac4"
                target="_blank"
                rel="noopener noreferrer"
                >Le Chat</a
              >
            </h2>
          </div>
        </div>
      </div>
      <!-- 正式起跑敘述 -->
      <div class="text-center text-yellow-300 space-y-2 px-4 max-w-xl">
        <p class="text-2xl font-bold tracking-widest">
          🕓 2025/07/05 04:18 三災八難正式啟動
        </p>
        <p class="text-lg leading-relaxed text-pink-200">
          🌿辯證邏輯：沒事發生世人皆不信因果，所以要有事發生<br />
          🌿辯證邏輯：沒事發生第十二屆臺北市長將不信因果，所以有事發生將使得草包鋒兄延續相信因果<br />
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
      <div class="text-center text-yellow-300 space-y-2 px-4 max-w-xl">
        <p class="text-2xl font-bold tracking-widest">
          🕓 2025/07/05 04:18 鋒兄不虛偽
        </p>
        <p class="text-lg leading-relaxed text-pink-200">
          <a
            href="https://chatgpt.com/share/685b733c-19c8-8011-aea1-8b5ce5218109"
            target="_blank"
            rel="noopener noreferrer"
            >🌿ChatGPT辯證邏輯 Click</a
          ><br />
        </p>
        <p class="text-lg leading-relaxed text-pink-200">
          <a
            href="https://manus.im/share/UuYdPAwy2jnAsOtGWNzyCn?replay=1"
            target="_blank"
            rel="noopener noreferrer"
            >🌿Manus 辯證邏輯 Click</a
          ><br />
        </p>
        <p class="text-lg leading-relaxed text-pink-200">
          <a
            href="https://claude.ai/public/artifacts/aca1359a-60d0-4cbb-a823-63bae8e6582b"
            target="_blank"
            rel="noopener noreferrer"
            >🌿Claude 辯證邏輯 Click</a
          ><br />
        </p>
        <p class="text-lg leading-relaxed text-pink-200">
          <a
            href="https://g.co/gemini/share/45108e73a587"
            target="_blank"
            rel="noopener noreferrer"
            >🌿Gemini 辯證邏輯 Click</a
          ><br />
        </p>
        <p class="text-lg leading-relaxed text-pink-200">
          <a
            href="https://copilot.microsoft.com/shares/KcWB4fByngi68tzmCcjwx"
            target="_blank"
            rel="noopener noreferrer"
            >🌿copilot 辯證邏輯 Click</a
          ><br />
        </p>
        <p class="text-lg leading-relaxed text-pink-200">
          <a
            href="https://chat.mistral.ai/chat/8ac5b7cd-1bf6-4ad8-a1b0-4abd28e5b502"
            target="_blank"
            rel="noopener noreferrer"
            >🌿Le Chat 辯證邏輯 Click</a
          ><br />
        </p>
        <p class="text-lg leading-relaxed text-pink-200">
          <a
            href="https://huggingface.co/chat/conversation/685b76888174d9bbbd9a7805"
            target="_blank"
            rel="noopener noreferrer"
            >🌿huggingface 辯證邏輯 Click</a
          ><br />
        </p>
        <p class="text-lg leading-relaxed text-pink-200">
          <a
            href="https://www.perplexity.ai/search/mei-shi-fa-sheng-shi-ren-jie-b-KNYvGJhET9G3qTgF1eAcOg"
            target="_blank"
            rel="noopener noreferrer"
            >🌿perplexity 辯證邏輯 Click</a
          ><br />
        </p>
        <p class="text-lg leading-relaxed text-pink-200">
          <a
            href="https://chat.deepseek.com/a/chat/s/8910b07c-f09b-46c3-a996-8b91638f3008"
            target="_blank"
            rel="noopener noreferrer"
            >🌿deepseek辯證邏輯 Click</a
          ><br />
        </p>
        <p class="text-lg leading-relaxed text-pink-200">
          <a
            href="https://grok.com/share/bGVnYWN5_88385fc0-45ee-4959-bba7-183cb6fb874e"
            target="_blank"
            rel="noopener noreferrer"
            >🌿grok辯證邏輯 Click</a
          ><br />
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
