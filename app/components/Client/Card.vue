<script setup lang="ts">
const { t } = useI18n({
  useScope: "local",
});
</script>

<template>
  <section
    id="card"
    class="case group relative flex w-[390px] flex-col gap-5 overflow-hidden rounded-xl border-2 border-gray-500/25 p-5 hover:border-white md:w-[450px]"
  >
    <NuxtLink
      name="cardProject-link"
      class="relative w-[100%] overflow-hidden rounded-md"
      to="/"
      target="_blank"
    >
      <slot name="cardProject-img">
        <NuxtImg src="/img/placeholder.png" />
      </slot>
      <p
        class="absolute left-[50%] top-[50%] w-max -translate-x-1/2 -translate-y-1/2 group-hover:flex lg:hidden"
      >
        {{ t("ClickToAccess") }}
      </p>
    </NuxtLink>

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

<i18n lang="json">
{
  "en": {
    "ClickToAccess": "Click to get access to the project"
  },
  "fr": {
    "ClickToAccess": "Click pour accéder projet"
  }
}
</i18n>

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
