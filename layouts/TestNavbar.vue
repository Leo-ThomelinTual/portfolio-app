<script setup></script>

<template>
  <section
    class="triggerSec fixed top-[50%] -translate-y-1/2 rounded-r-md z-[1000] opacity-25 hover:opacity-100 left-[-5px] hover:left-0 group"
  >
    <nav>
      <ul
        class="flex flex-col gap-10 py-30 border-l-2 border-gray-500 opacity-[0] group-hover:opacity-[1]"
      >
        <li class="p-2 hover:ml-1">
          <Icon size="2rem" name="material-symbols:home-outline-rounded" />
          <NuxtLink to="">Landing</NuxtLink>
        </li>
        <li class="text-nowrap p-2 hover:ml-1">
          <Icon size="2rem" name="material-symbols:check" />
          <NuxtLink to="">Compétences</NuxtLink>
        </li>
        <li class="p-2 hover:ml-1">
          <Icon size="2rem" name="pajamas:project" />
          <NuxtLink to="">Projet</NuxtLink>
        </li>
        <li class="p-2 hover:ml-1">
          <Icon size="2rem" name="material-symbols:call-outline" />
          <NuxtLink to="">Contact</NuxtLink>
        </li>
      </ul>
    </nav>
    <article
      class="fixed right-0 flex items-center h-full w-max border-y-2 rounded-r-md border-r-2 group"
    >
      <Icon
        class="flex group-hover:hidden"
        size="2rem"
        name="line-md:chevron-small-right"
      />
      <Icon
        class="hidden group-hover:flex"
        size="2rem"
        name="line-md:chevron-small-left"
      />
    </article>
  </section>
</template>

<style scoped>
.triggerSec {
  display: flex;
  align-items: center;
  overflow: hidden;
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
