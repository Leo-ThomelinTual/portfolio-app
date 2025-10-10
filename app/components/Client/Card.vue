<template>
  <section
    id="card"
    class="case group relative flex w-[390px] flex-col gap-2 overflow-hidden rounded-xl border-2 border-gray-700 bg-black/50 p-3 hover:border-white md:w-[450px] md:gap-5 md:p-5"
  >
    <slot name="cardProject-img">
      <NuxtImg src="/img/placeholder.png" />
    </slot>

    <!-- Link display for Mobile -->
    <article class="flex w-max gap-3 rounded-md bg-black/50 p-1 lg:hidden">
      <slot name="cardProject-iconlink"></slot>
    </article>
    <!-- --------------------------------- -->

    <!-- Link display for Desktop -->
    <article
      class="absolute bottom-0 top-5 z-[1000] m-1 hidden h-max w-max translate-x-[-200%] gap-3 rounded-md bg-black/50 p-1 group-hover:translate-x-[0] lg:flex"
    >
      <slot name="cardProject-iconlink"></slot>
    </article>
    <!-- --------------------------------- -->

    <article class="flex flex-col gap-2">
      <h3 class="border-b border-indigo-700 pb-2 text-2xl">
        <slot name="cardProject-title"></slot>
      </h3>

      <p class="flex justify-center gap-2">
        <slot name="cardProject-dateStart"></slot>
        <Icon size="1.3em" name="material-symbols:arrow-forward" />
        <slot name="cardProject-dateEnd"></slot>
      </p>

      <p>
        <slot name="cardProject-desc"></slot>
      </p>
    </article>
    <article class="flex flex-row flex-wrap gap-1">
      <slot name="fortag"></slot>
    </article>
  </section>
</template>

<style scoped>
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
