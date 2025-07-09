<template>
  <div class="flex flex-col min-h-screen">
    <!-- 手機版：Nav 在上方 -->
    <nav class="bg-gray-100 p-4">
      <Nav />
    </nav>

    <!-- 內容區 -->
    <main class="flex-1 p-4">
      <NuxtPage />
    </main>
  </div>
</template>
