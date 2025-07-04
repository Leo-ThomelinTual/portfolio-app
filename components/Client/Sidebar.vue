<script setup></script>

<template>
  <section
    class="triggerSec group fixed top-[50%] left-[-5px] z-[1000] flex -translate-y-1/2 items-center overflow-hidden rounded-r-md opacity-25 hover:left-0 hover:opacity-100"
  >
    <nav
      class="flex flex-col gap-10 border-l-2 border-gray-500 py-30 opacity-[0] group-hover:opacity-[1]"
    >
      <NuxtLink class="flex items-center gap-2 p-2 hover:ml-1" to="#landing">
        <Icon size="2rem" name="material-symbols:home-outline-rounded" />
        Landing
      </NuxtLink>

      <NuxtLink
        class="flex items-center gap-2 p-2 text-nowrap hover:ml-1"
        to="#skill"
      >
        <Icon size="2rem" name="material-symbols:check" />
        Compétences
      </NuxtLink>

      <NuxtLink class="flex items-center gap-2 p-2 hover:ml-1" to="#project">
        <Icon size="2rem" name="pajamas:project" />
        Projet
      </NuxtLink>

      <NuxtLink class="flex items-center gap-2 p-2 hover:ml-1" to="#contact">
        <Icon size="2rem" name="material-symbols:call-outline" />
        Contact
      </NuxtLink>
    </nav>
    <article
      class="group/switch fixed right-0 flex h-full w-max items-center rounded-r-md border-y-2 border-r-2"
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
.triggerSec {
  width: 40px;
  height: 95%;
  justify-content: space-between;
  padding-inline-start: 0.5em;
  padding-block: 2em;
  background-color: #121212;
  background: linear-gradient(
    90deg,
    rgba(18, 18, 18, 1) 30%,
    rgba(0, 0, 0, 0) 100%
  );
  transition: all 0.5s ease;
}
.triggerSec:hover {
  content-visibility: visible;
  width: 200px;
}
</style>
