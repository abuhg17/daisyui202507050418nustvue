<template>
  <div v-if="items.length">
    <div v-for="item in items" :key="item.$id" class="card">
      <img v-if="item.img" :src="item.img" width="100" />
      <h3>{{ item.name }}</h3>
      <p>價格: {{ item.price }} 元</p>
      <p>數量: {{ item.amount }}</p>
      <p>商店: {{ item.shop }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const items = ref([]);

onMounted(async () => {
  const res = await fetch(
    "https://fastapitsaopaofenghsiung2025.up.railway.app/inventory/"
  );
  const data = await res.json();
  items.value = data.documents;
});
</script>
