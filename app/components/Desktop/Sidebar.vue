<script setup></script>

<template>
  <section
    class="sidebar group/switch group fixed left-0 top-[50%] z-[1000] flex w-[60px] -translate-y-1/2 items-center overflow-hidden rounded-r-md py-10 opacity-25 backdrop-blur-[2px] hover:w-[200px] hover:opacity-100"
  >
    <nav class="pl-auto hover:pr-auto ml-2 flex flex-col gap-10 text-nowrap">
      <NuxtLink
        class="flex items-center gap-2 overflow-hidden hover:pl-1 hover:text-white"
        to="#landing"
      >
        <Icon
          class="flex-shrink-0"
          size="2em"
          name="material-symbols:home-outline-rounded"
        />

        <p class="opacity-0 group-hover:opacity-100">Landing</p>
      </NuxtLink>

      <NuxtLink
        class="flex items-center gap-2 overflow-hidden hover:pl-1 hover:text-white"
        to="#skill"
      >
        <Icon class="flex-shrink-0" size="2rem" name="material-symbols:check" />

        <p class="opacity-0 group-hover:opacity-100">Compétences</p>
      </NuxtLink>

      <NuxtLink
        class="flex items-center gap-2 overflow-hidden hover:pl-1 hover:text-white"
        to="#project"
      >
        <Icon class="flex-shrink-0" size="2rem" name="pajamas:project" />

        <p class="opacity-0 group-hover:opacity-100">Projet</p>
      </NuxtLink>

      <NuxtLink
        class="flex items-center gap-2 overflow-hidden hover:pl-1 hover:text-white"
        to="#project"
      >
        <Icon class="flex-shrink-0" size="2rem" name="pajamas:project" />

        <p class="text-wrap opacity-0 group-hover:opacity-100">
          Centre d'înterêt
        </p>
      </NuxtLink>

      <NuxtLink
        class="flex items-center gap-2 overflow-hidden hover:pl-1 hover:text-white"
        to="#contact"
      >
        <Icon
          class="flex-shrink-0"
          size="2rem"
          name="material-symbols:call-outline"
        />

        <p class="opacity-0 group-hover:opacity-100">Contact</p>
      </NuxtLink>
    </nav>

    <article
      class="fixed right-0 flex h-full w-[20px] items-center rounded-r-md border-y-2 border-r-2"
    >
      <Icon
        class="flex group-hover/switch:hidden"
        size="2rem"
        name="line-md:chevron-small-right"
      />
      <Icon
        class="hidden group-hover/switch:flex"
        size="2rem"
        name="line-md:chevron-small-left"
      />
    </article>
  </section>
</template>

<style scoped>
* {
  transition: all 0.4s ease;
}
.sidebar {
  background: linear-gradient(
    90deg,
    rgba(18, 18, 18, 1) 30%,
    rgba(0, 0, 0, 0) 100%
  );
}
</style>
