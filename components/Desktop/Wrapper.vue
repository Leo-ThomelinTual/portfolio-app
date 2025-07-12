<template>
  <section class="wrapper-content flex flex-col">
    <section
      class="wrapper mx-auto border-y-2 border-gray-500/25 hover:border-gray-500/50"
    >
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
  width: 85vw;
  height: max-content;
}

.wrapper {
  width: 90%;
  max-width: 1800px;
  position: relative;
  height: 100px;
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1) 15%,
    rgba(0, 0, 0, 1) 75%,
    rgba(0, 0, 0, 0)
  );
  transition: all 0.5s ease;
}

.item {
  width: 200px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: max(calc(200px * 8), 100%);
  animation: scroll 30s linear infinite;
  text-decoration: none;
  font-size: 2rem;
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
