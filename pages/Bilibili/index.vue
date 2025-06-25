<template>
  <h1>Bilibili Page</h1>
  <div v-if="isLoading">
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
          <th>owner</th>
          <th>bvid pic</th>
          <th>first_frame</th>
          <th>view</th>
          <th>danmaku</th>
          <th>like</th>
          <th>coin</th>
          <th>favorite</th>
          <th>share</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(bilibili, idx) in bilibilis">
          <th>{{ idx + 1 }}</th>
          <td>
            <a
              :href="`https://space.bilibili.com/${bilibili.owner.mid}/upload/video`"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                :src="`/api/bilibili/proxyimg?url=${encodeURIComponent(
                  bilibili.owner.face
                )}`"
                :alt="bilibili.owner.name"
                :title="bilibili.owner.name"
                width="100px"
                height="auto"
              />
            </a>
          </td>
          <td>
            <a
              :href="`https://www.bilibili.com/video/${bilibili.data.bvid}`"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                :src="`/api/bilibili/proxyimg?url=${encodeURIComponent(
                  bilibili.pic
                )}`"
                :alt="bilibili.title"
                :title="bilibili.title"
                width="100px"
                height="auto"
              />
            </a>
          </td>
          <td>
            <img
              v-show="bilibili.pages[0].first_frame"
              :src="`/api/bilibili/proxyimg?url=${encodeURIComponent(
                bilibili.pages[0].first_frame
              )}`"
              width="100px"
              height="auto"
            />
          </td>
          <td>{{ bilibili.stat.view.toLocaleString() }}</td>
          <td>{{ bilibili.stat.danmaku.toLocaleString() }}</td>
          <td>{{ bilibili.stat.like.toLocaleString() }}</td>
          <td>{{ bilibili.stat.coin.toLocaleString() }}</td>
          <td>{{ bilibili.stat.favorite.toLocaleString() }}</td>
          <td>{{ bilibili.stat.share.toLocaleString() }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
const arrs = [
  "BV1iZLJzuE6S",
  "BV1BELHzyEMi",
  "BV1Et4y1r7Eu",
  "BV1rSNvzeEPt",
  "BV1RkT2zREai",
  "BV1JtNXzkEFN",
  "BV1ogJhz1EbJ",
  "BV1VpTpzHEcT",
  "BV1PpZ2YoEtU",
  "BV1WiNkz4EZM",
  "BV1a5E1zLE2u",
  "BV1WmCpYHE5C",
  "BV1M6NBeZEVu",
  "BV1XXNiznE4X",
  "BV1pSLgz9EnQ",
  "BV13j421o7mz",
];
const bilibilis = ref([]);
const isLoading = ref(true);
onMounted(async () => {
  for (const arr of arrs) {
    const { data } = await useFetch(`/api/bilibili/${arr}`);
    if (data.value) {
      bilibilis.value.push(data.value);
    }
  }
  isLoading.value = false;
});
</script>
<style scoped>
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
