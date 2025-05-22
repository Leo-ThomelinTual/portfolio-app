<script setup></script>

<template>
  <section
    class="group flex flex-col gap-3 w-[450px] overflow-hidden border-2 md:border-transparent border-gray-500 p-2 md:p-5 rounded-xl md:hover:border-white case"
  >
    <NuxtLink name="cardProject-link" class="relative" to="">
      <slot name="cardProject-img"></slot>
      <p
        class="group-hover:flex md:hidden absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-max"
      >
        Click pour accéder projet
      </p>
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

    <article class="flex flex-row gap-1">
      <p
        class="border border-gray-600 bg-gray-500 bg-opacity-25 w-max p-1 rounded-md text-white-500 hover:bg-opacity-40 hover:border-gray-500"
      >
        TailwindsCSS <Icon name="devicon:tailwindcss" />
      </p>
      <p
        class="border border-gray-600 bg-gray-500 bg-opacity-25 w-max p-1 rounded-md text-white-500 hover:bg-opacity-40 hover:border-gray-500"
      >
        PHP <Icon name="devicon:php" />
      </p>
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
