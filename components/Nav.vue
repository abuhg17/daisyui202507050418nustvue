<template>
  <nav class="bg-base-100 shadow-sm p-3">
    <div class="flex justify-between items-center">
      <h1 class="text-xl font-bold">
        This is Nav. 🔢Nust(Vue)🔢daisyUI(Tailwind)
      </h1>

      <!-- 漢堡按鈕 (手機可見，中型以上隱藏) -->
      <button
        @click="menuOpen = !menuOpen"
        class="btn btn-ghost md:hidden"
        aria-label="Toggle menu"
      >
        <svg
          v-if="!menuOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- 導航選單 -->
    <div
      :class="[
        'flex flex-col md:flex-row md:space-x-4 mt-2',
        menuOpen ? 'block' : 'hidden',
        'md:block',
      ]"
    >
      <NuxtLink to="/" class="btn btn-ghost text-xl">Home page</NuxtLink>
      <NuxtLink to="/about" class="btn btn-ghost text-xl">About page</NuxtLink>
      <NuxtLink to="/blog/202507050418" class="btn btn-ghost text-xl"
        >Blog page 202507050418</NuxtLink
      >
      <NuxtLink to="/countdown" class="btn btn-ghost text-xl"
        >Countdown page</NuxtLink
      >
      <NuxtLink to="/bilibili" class="btn btn-ghost text-xl"
        >Bilibili page</NuxtLink
      >
      <NuxtLink to="/firebasefood" class="btn btn-ghost text-xl"
        >FirebaseFood page</NuxtLink
      >
      <NuxtLink to="/youtube" class="btn btn-ghost text-xl"
        >Youtube page</NuxtLink
      >
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
const menuOpen = ref(false);
</script>
