<script setup lang="ts">
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
    <article class="flex flex-wrap gap-1">
      <UtilsTagsBootstrap @click="filterList" data-tag="bootstrap" />
      <UtilsTagsNext @click="filterList" data-tag="next" />
      <UtilsTagsNuxt @click="filterList" data-tag="nuxt" />
      <UtilsTagsPhp @click="filterList" data-tag="php" />
      <UtilsTagsReact @click="filterList" data-tag="react" />
      <UtilsTagsSymfony @click="filterList" data-tag="symfony" />
      <UtilsTagsTailwindcss @click="filterList" data-tag="tailwindcss" />
      <UtilsTagsProfessionnal @click="filterList" data-tag="pro" />
      <UtilsTagsPersonnel />
    </article>
  </section>
</template>
