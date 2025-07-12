<script setup>
import { onMounted } from "vue";

let conceptTimeout = null;

function toggleConcept(manual = false) {
  const frontend = document.querySelector("#frontend");
  const backend = document.querySelector("#backend");

  if (frontend && backend) {
    frontend.classList.toggle("opacity-100");
    frontend.classList.toggle("opacity-35");
    frontend.classList.toggle("mt-0");
    frontend.classList.toggle("mt-20");
    frontend.classList.toggle("z-[0]");
    frontend.classList.toggle("z-[1]");
    backend.classList.toggle("opacity-100");
    backend.classList.toggle("opacity-35");
    backend.classList.toggle("mt-0");
    backend.classList.toggle("mt-20");
    backend.classList.toggle("z-[1]");
    backend.classList.toggle("z-[0]");

    if (conceptTimeout) clearTimeout(conceptTimeout);

    if (!manual) {
      conceptTimeout = setTimeout(() => toggleConcept(), 6000);
    }
  }
}

function handleManualToggle() {
  toggleConcept(true); // True : Manual / False : Auto
}

function EnableColumn() {
  const overlapSection = document.querySelector("#overlap");
  const columnSection = document.querySelector("#column");

  if (columnSection.classList.contains("hidden")) {
    columnSection.classList.remove("hidden");
    columnSection.classList.add("flex");

    overlapSection.classList.remove("flex");
    overlapSection.classList.add("hidden");
    toggleConcept(true);
  }
}
function EnableOverlap() {
  const overlapSection = document.querySelector("#overlap");
  const columnSection = document.querySelector("#column");

  if (overlapSection.classList.contains("hidden")) {
    overlapSection.classList.remove("hidden");
    overlapSection.classList.add("flex");

    columnSection.classList.remove("flex");
    columnSection.classList.add("hidden");
    toggleConcept(false);
  }
}

function EnableAnimation() {
  toggleConcept(false);
}

onMounted(() => {
  toggleConcept();
});
</script>

<template>
  <section class="relative flex h-[max-content] mb-[250px] flex-row flex-wrap gap-2">
    <article
      class="absolute -top-10 left-0 z-[10] flex w-max flex-row gap-2 text-nowrap"
    >
      <button
        @click="EnableColumn"
        class="group flex w-[35px] flex-row gap-2 overflow-hidden rounded-md border-2 border-gray-500/50 bg-gray-500/25 p-1 hover:w-[100px]"
      >
        <Icon name="material-symbols:view-column-2" />
        <p class="hidden group-hover:flex">Column</p>
      </button>
      <button
        @click="EnableOverlap"
        class="group flex w-[35px] flex-row gap-2 overflow-hidden rounded-md border-2 border-gray-500/50 bg-gray-500/25 p-1 hover:w-[100px]"
      >
        <Icon name="material-symbols:overview-key-rounded" />
        <p class="hidden group-hover:flex">Overlap</p>
      </button>
      <button
        @click="EnableAnimation"
        class="group flex w-[35px] flex-row gap-2 overflow-hidden rounded-md border-2 border-gray-500/50 bg-gray-500/25 p-1 hover:w-[200px]"
      >
        <Icon name="material-symbols:animated-images" />
        <p class="hidden group-hover:flex">Enable Animation</p>
      </button>
    </article>

    <section @click="handleManualToggle" id="overlap" class="w-full">
      <article
        id="frontend"
        class="absolute z-[1] ml-5 mt-[20px] flex w-max flex-col gap-5 rounded-md border-2 border-gray-500/50 bg-gray-500/25 p-3 opacity-100 shadow-lg shadow-black backdrop-blur-sm"
      >
        <h2
          class="w-max rounded-md border-2 border-gray-300/25 bg-black/50 p-3 text-2xl uppercase"
        >
          Frontend
        </h2>
        <UtilsSkillFrontend />
      </article>
      <article
        id="backend"
        class="absolute z-[0] mt-[0] flex w-max flex-col gap-5 rounded-md border-2 border-gray-500/50 bg-gray-500/25 p-3 opacity-35 shadow-lg shadow-black backdrop-blur-sm"
      >
        <h2
          class="w-max rounded-md border-2 border-gray-300/25 bg-black/50 p-3 text-2xl uppercase"
        >
          Backend
        </h2>
        <UtilsSkillBackend />
      </article>
    </section>

    <!-- Column section -->
    <section id="column" class="hidden flex-row flex-wrap gap-2">
      <article
        class="flex w-max flex-col gap-3 rounded-md border-2 border-gray-500/50 bg-gray-500/25 p-3"
      >
        <h2
          class="w-max rounded-md border-2 border-gray-300/25 bg-black/50 p-3 text-2xl uppercase"
        >
          Frontend
        </h2>
        <UtilsSkillFrontend />
      </article>
      <article
        class="flex w-max flex-col gap-3 rounded-md border-2 border-gray-500/50 bg-gray-500/25 p-3"
      >
        <h2
          class="w-max rounded-md border-2 border-gray-300/25 bg-black/50 p-3 text-2xl uppercase"
        >
          Backend
        </h2>
        <UtilsSkillBackend />
      </article>
    </section>
  </section>
</template>

<style scoped>
* {
  transition: all 0.5s ease;
}
</style>
