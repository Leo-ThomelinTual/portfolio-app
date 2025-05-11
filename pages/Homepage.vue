<script setup lang="ts"></script>

<template>
  <main class="homepage-main">
    <section
      class="title-section absolute top-1/3 left-1/2 transform -translate-x-1/2 flex gap-5 flex-col"
    >
      <h2>The entreprise you ever need.</h2>
      <h3 class="change-text inline-flex justify-center gap-3">
        We made your <span></span>
      </h3>
    </section>
    <div class="trigger trigger-right"></div>
    <div class="trigger trigger-left"></div>
    <div class="trigger trigger-top"></div>
    <div class="trigger trigger-bottom"></div>
    <div class="trigger-corner trigger-corner-topleft"></div>
    <div class="trigger-corner trigger-corner-topright"></div>
    <div class="trigger-corner trigger-corner-bottomleft"></div>
    <div class="trigger-corner trigger-corner-bottomright"></div>
    <div class="homepage-bg"></div>
    <Store />
    <SleekButton />

    <section class="notification notification-information">
      <h2>TEST Notification</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        porro, vitae ipsum asperiores placeat doloribus reiciendis id dolor
        harum laborum quos sequi explicabo consectetur quisquam neque distinctio
        tempore quam obcaecati!
      </p>
    </section>
  </main>
</template>

<style>
.title-section {
  z-index: 1000;
  animation: Bounce 1s ease forwards;
}
</style>
