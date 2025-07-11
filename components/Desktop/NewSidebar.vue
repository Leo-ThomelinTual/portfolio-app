<script setup></script>

<template>
  <section
    class="sidebar group/switch group fixed left-0 top-[50%] z-[1000] flex w-[75px] -translate-y-1/2 items-center overflow-hidden rounded-r-md py-10 opacity-25 backdrop-blur-[2px] hover:w-[200px] hover:opacity-100"
  >
    <nav class="pl-auto hover:pr-auto mx-auto flex flex-col gap-10 text-nowrap">
      <NuxtLink
        class="flex items-center gap-2 overflow-hidden hover:pl-1 hover:text-white"
        to="#landing"
      >
        <Icon size="2em" name="material-symbols:home-outline-rounded" />

        <p class="invisible group-hover:visible">Landing</p>
      </NuxtLink>

      <NuxtLink
        class="flex items-center gap-2 overflow-hidden hover:pl-1 hover:text-white"
        to="#skill"
      >
        <Icon size="2rem" name="material-symbols:check" />

        <p class="invisible group-hover:visible">Compétences</p>
      </NuxtLink>

      <NuxtLink
        class="flex items-center gap-2 overflow-hidden hover:pl-1 hover:text-white"
        to="#project"
      >
        <Icon size="2rem" name="pajamas:project" />

        <p class="invisible group-hover:visible">Projet</p>
      </NuxtLink>

      <NuxtLink
        class="flex items-center gap-2 overflow-hidden hover:pl-1 hover:text-white"
        to="#project"
      >
        <Icon size="2rem" name="pajamas:project" />

        <p class="invisible group-hover:visible">Centre d'înterêt</p>
      </NuxtLink>

      <NuxtLink
        class="flex items-center gap-2 overflow-hidden hover:pl-1 hover:text-white"
        to="#contact"
      >
        <Icon size="2rem" name="material-symbols:call-outline" />

        <p class="invisible group-hover:visible">Contact</p>
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
