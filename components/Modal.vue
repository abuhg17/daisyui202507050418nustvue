<template>
  <div
    class="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center"
    @click.self="$emit('close')"
  >
    <div class="bg-white rounded-lg shadow-xl w-full max-w-3xl p-4 relative">
      <slot />
      <button class="absolute top-2 right-2" @click="$emit('close')">❌</button>
    </div>
  </div>
</template>
