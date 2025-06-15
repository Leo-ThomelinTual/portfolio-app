<script setup lang="ts">
import Bootstrap from "./tags/Bootstrap.vue";
import Next from "./tags/Next.vue";
import Nuxt from "./tags/Nuxt.vue";
import Php from "./tags/Php.vue";
import Professionnal from "./tags/Professionnal.vue";
import React from "./tags/React.vue";
import Symfony from "./tags/Symfony.vue";
import Tailwindcss from "./tags/Tailwindcss.vue";

function filterList(event: Event) {
  const clickedElement = event.currentTarget as HTMLElement;
  const tagName = clickedElement.getAttribute("data-tag");

  if (tagName === "bootstrap") {
  }
  console.log("Tag cliqué:", tagName);
}
</script>

<template>
  <section class="flex flex-col gap-3 mx-auto w-[90%] md:w-[50%]">
    <article class="flex gap-2 items-center border-b-2 p-2 w-[200px]">
      <p>Filtre</p>
      <Icon size="1.5rem" name="material-symbols:filter-list"></Icon>
    </article>
    <p>Crée avec :</p>
    <article class="flex flex-wrap gap-1 md:gap-3">
      <Bootstrap @click="filterList" data-tag="bootstrap" />
      <Next @click="filterList" data-tag="next" />
      <Nuxt @click="filterList" data-tag="nuxt" />
      <Php @click="filterList" data-tag="php" />
      <React @click="filterList" data-tag="react" />
      <Symfony @click="filterList" data-tag="symfony" />
      <Tailwindcss @click="filterList" data-tag="tailwindcss" />
      <Professionnal @click="filterList" data-tag="pro" />
    </article>
  </section>
</template>
