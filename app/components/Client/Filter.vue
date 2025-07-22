<script setup lang="ts">
function filterList(event: Event) {
  const clickedElement = event.currentTarget as HTMLElement;
  const tagName = clickedElement.getAttribute("data-tag");
  const cards = document.querySelectorAll("#card");

  const getItems = document.querySelectorAll("#" + tagName + ":not(#excluder)");

  ShowAll();

  clickedElement.classList.toggle("bg-red-500");
  clickedElement.classList.toggle("hover:bg-red-700");

  // Récupère toute les cards avec un id #card

  cards.forEach((card) => {
    const excludedCard = card.querySelector("#excludeCard");
    const hasGoodTag = card.querySelector("p[id^=" + tagName + "]");

    if (!excludedCard) {
      if (!hasGoodTag) {
        card.classList.toggle("hidden");
      }
    }
  });
}

function ShowAll() {
  const cards = document.querySelectorAll("#card");
  const excluded = document.querySelectorAll("#excluder");

  excluded.forEach((exclude) => {
    exclude.classList.remove("bg-red-500");
    exclude.classList.remove("hover:bg-red-700");
  });

  cards.forEach((card) => {
    card.classList.remove("hidden");
    card.classList.add("flex");
  });
}
</script>

<template>
  <section class="flex w-[85%] flex-col gap-3 lg:w-[65%]">
    <article class="flex w-[200px] items-center gap-2 border-b-2 p-2">
      <p>Filtre</p>
      <Icon size="1.5rem" name="material-symbols:filter-list" />
    </article>
    <article class="flex flex-wrap gap-1">
      <UtilsTagsShowAll @click="ShowAll" />
      <UtilsTagsBootstrap @click="filterList" id="excluder" />
      <UtilsTagsNext @click="filterList" id="excluder" />
      <UtilsTagsNuxt @click="filterList" id="excluder" />
      <UtilsTagsPhp @click="filterList" id="excluder" />
      <UtilsTagsReact @click="filterList" id="excluder" />
      <UtilsTagsSymfony @click="filterList" id="excluder" />
      <UtilsTagsTailwindcss @click="filterList" id="excluder" />
      <UtilsTagsProfessionnal @click="filterList" id="excluder" />
      <UtilsTagsPersonnel @click="filterList" id="excluder" />
    </article>
  </section>
</template>
