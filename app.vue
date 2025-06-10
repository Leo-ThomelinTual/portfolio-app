<script setup>
import Navbar from "./layouts/Navbar.vue";
</script>

<template>
  <BubbleBlue
    class="xl:flex hidden fixed top-[150px] right-[0] w-[40em] h-[25em] z-[-10] homepage-bg"
  />

  <Navbar />
  <ModaleLanguage />
  <NuxtPage />
  <NuxtLayout />
  <Notifications class="notification-error">
    <template #notification-title>Erreur</template>
    <template #notification-text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
      voluptatum eos natus tempore laborum.
    </template>
  </Notifications>
  <BubbleBlue
    class="xl:flex hidden fixed bottom-[0] w-[35em] h-[25em] left-[100px] z-[-10] homepage-bg"
  />
  <BubblePurple
    class="xl:flex hidden fixed bottom-[0] left-[0] w-[20em] h-[20em] z-[-10] homepage-bg"
  />
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
