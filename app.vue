<script setup>
import Navbar from "./layouts/Navbar.vue";
</script>

<template>
  <Navbar />
  <!-- <modaleLanguage /> -->
  <NuxtPage />
  <NuxtLayout />
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from {
  transform: translateX(0);
}
.page-leave-to {
  transform: translateX(100%);
}
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>
