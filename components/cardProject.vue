<script setup></script>

<template>
  <section
    class="group flex flex-col gap-3 w-[450px] overflow-hidden border-2 border-opacity-25 border-gray-500 p-2 md:p-5 rounded-xl md:hover:border-white case"
  >
    <NuxtLink name="cardProject-link" class="relative overflow-hidden" to="">
      <slot name="cardProject-img"></slot>
      <p
        class="group-hover:flex md:hidden absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-max"
      >
        Click pour accéder projet
      </p>
      <div
        class="flex gap-3 rounded-md absolute m-1 p-1 top-0 w-100 bg-black bg-opacity-50 translate-x-[-200%] group-hover:translate-x-[0]"
      >
      <slot name="cardProject-iconlink"></slot>

      </div>
    </NuxtLink>

    <h3 class="border-b border-indigo-700 pb-2">
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
      <slot name="fortag"> </slot>
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
