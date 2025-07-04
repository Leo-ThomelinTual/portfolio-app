<template>
  <section
    class="group case flex w-[450px] flex-col gap-3 overflow-hidden rounded-xl border-2 border-gray-500/25 p-2 md:p-5 md:hover:border-white"
  >
    <NuxtLink
      name="cardProject-link"
      class="relative overflow-hidden"
      to="https://www.youtube.com/"
    >
      <slot name="cardProject-img"></slot>
      <p
        class="absolute top-[50%] left-[50%] w-max -translate-x-1/2 -translate-y-1/2 group-hover:flex md:hidden"
      >
        Click pour accéder projet
      </p>
    </NuxtLink>

    <div
      class="absolute top-5 z-[1000] m-1 flex w-max translate-x-[-200%] gap-3 rounded-md bg-black/50 p-1 group-hover:translate-x-[0]"
    >
      <slot name="cardProject-iconlink"></slot>
    </div>

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
