<template>
  <section
    class="case group relative flex w-[395px] flex-col gap-3 overflow-hidden rounded-xl border-2 border-gray-500/25 p-2 hover:border-white lg:w-[450px] lg:p-5"
  >
    <article class="relative overflow-hidden rounded-md">
      <slot name="cardProject-img">
        <NuxtImg src="/img/next-project.svg" />
      </slot>
    </article>

    <h3 class="border-b border-indigo-700 pb-2 text-2xl">
      <slot name="cardProject-title" />
    </h3>

    <p>
      <slot name="cardProject-desc" />
    </p>
    <article class="flex flex-row flex-wrap gap-1">
      <slot name="fortag"></slot>
    </article>
  </section>
</template>

<style>
* {
  transition: all 0.5s ease;
}

@media (min-width: 1024px) {
  .case {
    transform-style: preserve-3d;
  }

  .case:hover {
    transform: perspective(1000px) rotateY(10deg) scale(1.05);
  }
}
</style>
