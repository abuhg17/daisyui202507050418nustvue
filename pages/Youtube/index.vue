<template>
  <h1>Youtube Page</h1>
  <div v-if="isLoading">
    <div class="lds-facebook">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="lds-default">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="lds-spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
  <div class="overflow-x-auto">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>channelTitle</th>
          <th>thumbnails</th>
          <th>viewCount</th>
          <th>likeCount</th>
          <th>publishedAt</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(youtube, idx) in youtubes">
          <td v-if="idx + 1 === 75">🎯2025/07/05 04:18🎯</td>
          <td v-else-if="idx + 1 === 37">🀄高考三級資訊處理榜首🀄</td>
          <td v-else-if="idx + 1 === 33">
            🛡️⚔️🔥<br />ww3 2029/09/15~2032/02/20 888 days<br />🔥⚔️🛡️
          </td>
          <td v-else>{{ idx + 1 }}</td>
          <td>
            <a
              :href="`https://www.youtube.com/channel/${youtube.channel.items.id}`"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                :src="youtube.channel.items.snippet.thumbnails.medium.url"
                :alt="youtube.channel.items.snippet.title"
                :title="youtube.channel.items.snippet.title"
                width="100px"
                height="auto"
              />
            </a>
          </td>
          <td>
            <a
              :href="`https://www.youtube.com/watch?v=${youtube.items.id}`"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                :src="youtube.items.snippet.thumbnails.medium.url"
                :alt="youtube.items.snippet.title"
                :title="youtube.items.snippet.title"
                width="100px"
                height="auto"
              />
            </a>
          </td>
          <td>{{ youtube.items.statistics.viewCount }}</td>
          <td>{{ youtube.items.statistics.likeCount }}</td>
          <td>{{ youtube.items.snippet.publishedAt }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
const arrs = [
  "hIjIt3yU8aA",
  "b1YbLznN9AE",
  "kmMOqTiUhAY",
  "-_lYCBqyNYo",
  "BVMjA_dCE6c",
  "-7h--XTyj8A",
  "jp6Rhf73neY",
  "Ey0qVzG8_vU",
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
  "qHjGhG4aJ_k",
  "e1AWBS-RS-I",
  "wW0fZhdjrGM",
  "bBA95gwfcXA",
  "7PfL5w6selY",
  "k6pHuMP6ObU",
  "7jPFzlxj3qQ",
  "LGpQs_dOxYw",
  "Ftw4vkl_V0s",
  "FZ8N_370MPE",
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
  "K6OPfeuwB3c",
  "WQuRLmsYWIc",
  "-4ADGW7TE0Q",
];
const youtubes = ref([]);
const isLoading = ref(true);
onMounted(async () => {
  for (const arr of arrs) {
    const { data } = await useFetch(`/api/youtube/${arr}`);
    if (data.value) {
      youtubes.value.push(data.value);
      const channelId = data.value.items.snippet.channelId;
      const { data: channeldata } = await useFetch(
        `/api/youtube/channel/${channelId}`
      );
      youtubes.value[youtubes.value.length - 1] = {
        ...youtubes.value[youtubes.value.length - 1],
        channel: channeldata.value,
      };
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  isLoading.value = false;
});
</script>
<style scoped>
.lds-facebook,
.lds-facebook div {
  box-sizing: border-box;
}
.lds-facebook {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: currentColor;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: 56px;
  animation-delay: 0s;
}
@keyframes lds-facebook {
  0% {
    top: 8px;
    height: 64px;
  }
  50%,
  100% {
    top: 24px;
    height: 32px;
  }
}

.lds-default,
.lds-default div {
  box-sizing: border-box;
}
.lds-default {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-default div {
  position: absolute;
  width: 6.4px;
  height: 6.4px;
  background: currentColor;
  border-radius: 50%;
  animation: lds-default 1.2s linear infinite;
}
.lds-default div:nth-child(1) {
  animation-delay: 0s;
  top: 36.8px;
  left: 66.24px;
}
.lds-default div:nth-child(2) {
  animation-delay: -0.1s;
  top: 22.08px;
  left: 62.29579px;
}
.lds-default div:nth-child(3) {
  animation-delay: -0.2s;
  top: 11.30421px;
  left: 51.52px;
}
.lds-default div:nth-child(4) {
  animation-delay: -0.3s;
  top: 7.36px;
  left: 36.8px;
}
.lds-default div:nth-child(5) {
  animation-delay: -0.4s;
  top: 11.30421px;
  left: 22.08px;
}
.lds-default div:nth-child(6) {
  animation-delay: -0.5s;
  top: 22.08px;
  left: 11.30421px;
}
.lds-default div:nth-child(7) {
  animation-delay: -0.6s;
  top: 36.8px;
  left: 7.36px;
}
.lds-default div:nth-child(8) {
  animation-delay: -0.7s;
  top: 51.52px;
  left: 11.30421px;
}
.lds-default div:nth-child(9) {
  animation-delay: -0.8s;
  top: 62.29579px;
  left: 22.08px;
}
.lds-default div:nth-child(10) {
  animation-delay: -0.9s;
  top: 66.24px;
  left: 36.8px;
}
.lds-default div:nth-child(11) {
  animation-delay: -1s;
  top: 62.29579px;
  left: 51.52px;
}
.lds-default div:nth-child(12) {
  animation-delay: -1.1s;
  top: 51.52px;
  left: 62.29579px;
}
@keyframes lds-default {
  0%,
  20%,
  80%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
}

.lds-spinner,
.lds-spinner div,
.lds-spinner div:after {
  box-sizing: border-box;
}
.lds-spinner {
  color: currentColor;
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-spinner div {
  transform-origin: 40px 40px;
  animation: lds-spinner 1.2s linear infinite;
}
.lds-spinner div:after {
  content: " ";
  display: block;
  position: absolute;
  top: 3.2px;
  left: 36.8px;
  width: 6.4px;
  height: 17.6px;
  border-radius: 20%;
  background: currentColor;
}
.lds-spinner div:nth-child(1) {
  transform: rotate(0deg);
  animation-delay: -1.1s;
}
.lds-spinner div:nth-child(2) {
  transform: rotate(30deg);
  animation-delay: -1s;
}
.lds-spinner div:nth-child(3) {
  transform: rotate(60deg);
  animation-delay: -0.9s;
}
.lds-spinner div:nth-child(4) {
  transform: rotate(90deg);
  animation-delay: -0.8s;
}
.lds-spinner div:nth-child(5) {
  transform: rotate(120deg);
  animation-delay: -0.7s;
}
.lds-spinner div:nth-child(6) {
  transform: rotate(150deg);
  animation-delay: -0.6s;
}
.lds-spinner div:nth-child(7) {
  transform: rotate(180deg);
  animation-delay: -0.5s;
}
.lds-spinner div:nth-child(8) {
  transform: rotate(210deg);
  animation-delay: -0.4s;
}
.lds-spinner div:nth-child(9) {
  transform: rotate(240deg);
  animation-delay: -0.3s;
}
.lds-spinner div:nth-child(10) {
  transform: rotate(270deg);
  animation-delay: -0.2s;
}
.lds-spinner div:nth-child(11) {
  transform: rotate(300deg);
  animation-delay: -0.1s;
}
.lds-spinner div:nth-child(12) {
  transform: rotate(330deg);
  animation-delay: 0s;
}
@keyframes lds-spinner {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
