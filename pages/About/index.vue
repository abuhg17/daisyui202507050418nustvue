<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-2">Browser & Device Info</h1>
    <p><strong>User Agent:</strong> {{ ua }}</p>
    <p><strong>Device Brand:</strong> {{ device }}</p>
    <p><strong>Browser:</strong> {{ browser }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const ua = ref("");
const browser = ref("Unknown");
const device = ref("Unknown");

onMounted(async () => {
  const rawUA = navigator.userAgent.toLowerCase();
  ua.value = rawUA;

  // 🔍 偵測裝置品牌
  if (
    rawUA.includes("xiaomi") ||
    rawUA.includes("mi ") ||
    rawUA.includes("redmi")
  ) {
    device.value = "Xiaomi";
  } else if (rawUA.includes("samsung") || rawUA.includes("sm-")) {
    device.value = "Samsung";
  } else {
    device.value = "Other";
  }

  // 🔍 偵測瀏覽器
  if (rawUA.includes("firefox")) {
    browser.value = rawUA.includes("waterfox") ? "Waterfox" : "Firefox";
  } else if (rawUA.includes("edg")) {
    browser.value = "Edge";
  } else if (rawUA.includes("opr") || rawUA.includes("opera")) {
    browser.value = "Opera";
  } else if (navigator.brave && typeof navigator.brave.isBrave === "function") {
    const isBrave = await navigator.brave.isBrave();
    if (isBrave) browser.value = "Brave";
  } else if (rawUA.includes("vivaldi")) {
    browser.value = "Vivaldi";
  } else if (rawUA.includes("arc")) {
    browser.value = "Arc";
  } else if (rawUA.includes("zen")) {
    browser.value = "Zen Browser";
  } else if (
    rawUA.includes("safari") &&
    !rawUA.includes("chrome") &&
    !rawUA.includes("chromium") &&
    !rawUA.includes("android")
  ) {
    // ✅ Safari 判斷條件：包含 safari，但不包含 chrome、chromium、android
    browser.value = "Safari";
  } else if (rawUA.includes("chrome")) {
    browser.value = "Chrome";
  } else if (rawUA.includes("msie") || rawUA.includes("trident")) {
    browser.value = "Internet Explorer";
  }
});
</script>
