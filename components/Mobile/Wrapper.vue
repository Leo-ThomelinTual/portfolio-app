<template>
  <section class="wrapper-content flex flex-col">
    <section class="wrapper border-y-2 border-gray-500/35">
      <NuxtLink aria-hidden="true" tabindex="-1" to="/">
        <article class="item item-1">HTML</article>
      </NuxtLink>
      <NuxtLink aria-hidden="true" tabindex="-1" to="/">
        <article class="item item-2">CSS</article>
      </NuxtLink>
      <NuxtLink aria-hidden="true" tabindex="-1" to="/">
        <article class="item item-3">PHP</article>
      </NuxtLink>
      <NuxtLink aria-hidden="true" tabindex="-1" to="/">
        <article class="item item-4">Javascript</article>
      </NuxtLink>
      <NuxtLink aria-hidden="true" tabindex="-1" to="/">
        <article class="item item-5">Bootstrap</article>
      </NuxtLink>
      <NuxtLink aria-hidden="true" tabindex="-1" to="/">
        <article class="item item-6">Webdesign</article>
      </NuxtLink>
      <NuxtLink aria-hidden="true" tabindex="-1" to="/">
        <article class="item item-7">SQL</article>
      </NuxtLink>
      <NuxtLink aria-hidden="true" tabindex="-1" to="/">
        <article class="item item-8">Symfony</article>
      </NuxtLink>
    </section>
  </section>
</template>

<style scoped>
.wrapper-content {
  width: 100vw;
  height: 250px;
}

.wrapper {
  position: relative;
  height: 100px;
  overflow: hidden;
  transition: all 0.5s ease;
}

.item {
  width: max-content;
  height: 100px;
  display: flex;
  text-transform: uppercase;
  align-items: center;
  position: absolute;
  left: max(calc(150px * 8), 100%);
  animation: scroll 30s linear infinite;
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: bold;
  color: gray;
}

.item-1 {
  animation-delay: calc(30s / 8 * (8 - 1) * -1);
}
.item-2 {
  animation-delay: calc(30s / 8 * (8 - 2) * -1);
}
.item-3 {
  animation-delay: calc(30s / 8 * (8 - 3) * -1);
}
.item-4 {
  animation-delay: calc(30s / 8 * (8 - 4) * -1);
}
.item-5 {
  animation-delay: calc(30s / 8 * (8 - 5) * -1);
}
.item-6 {
  animation-delay: calc(30s / 8 * (8 - 6) * -1);
}
.item-7 {
  animation-delay: calc(30s / 8 * (8 - 7) * -1);
}
.item-8 {
  animation-delay: calc(30s / 8 * (8 - 8) * -1);
}
</style>
