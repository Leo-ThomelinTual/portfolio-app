<script setup>
import { onMounted, onBeforeUnmount } from "vue";

const { t } = useI18n({
  useScope: "local",
});

let conceptTimeout = null;

function toggleConcept() {
  const frontend = document.querySelector("#frontend");
  const backend = document.querySelector("#backend");

  if (frontend && backend) {
    frontend.classList.toggle("opacity-100");
    frontend.classList.toggle("opacity-35");

    frontend.classList.toggle("mt-0");
    frontend.classList.toggle("mt-[20px]");

    frontend.classList.toggle("backdrop-blur-sm");
    frontend.classList.toggle("backdrop-blur-none");

    frontend.classList.toggle("shadow-lg");
    frontend.classList.toggle("shadow-none");

    frontend.classList.toggle("ml-5");
    frontend.classList.toggle("ml-0");

    frontend.classList.toggle("z-[0]");
    frontend.classList.toggle("z-[1]");

    frontend.classList.toggle("ml-0");
    frontend.classList.toggle("ml-5");

    backend.classList.toggle("opacity-100");
    backend.classList.toggle("opacity-35");

    backend.classList.toggle("shadow-lg");
    backend.classList.toggle("shadow-none");

    backend.classList.toggle("backdrop-blur-none");
    backend.classList.toggle("backdrop-blur-sm");

    backend.classList.toggle("mt-[20px]");
    backend.classList.toggle("mt-0");

    backend.classList.toggle("z-[1]");
    backend.classList.toggle("z-[0]");

    if (conceptTimeout) clearTimeout(conceptTimeout);

    conceptTimeout = setTimeout(() => toggleConcept(), 6000);
  }
}

function EnableColumn() {
  const overlapSection = document.querySelector("#overlap");
  const columnSection = document.querySelector("#column");

  if (columnSection.classList.contains("hidden")) {
    columnSection.classList.remove("hidden");
    columnSection.classList.add("flex");

    overlapSection.classList.remove("flex");
    overlapSection.classList.add("hidden");
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
  }
}

function checkDim() {
  if (window.innerWidth <= 1280) {
    EnableColumn();
  } else if (window.innerWidth > 1280) {
    EnableOverlap();
  }
}

onMounted(() => {
  toggleConcept();
  checkDim();
  window.addEventListener("resize", checkDim);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", checkDim); // Nettoyage
});
</script>

<template>
  <section class="relative flex h-[50vh] flex-row flex-wrap gap-2">
    <article
      class="absolute -top-10 left-0 z-[10] hidden w-max flex-row gap-2 text-nowrap xl:flex"
    >
      <button
        @click="EnableColumn"
        class="group flex w-[35px] flex-row gap-2 overflow-hidden rounded-md border-2 border-gray-500/50 bg-gray-800 p-1 hover:w-[110px]"
      >
        <Icon class="flex-shrink-0" name="material-symbols:view-column-2" />
        <p class="opacity-0 group-hover:opacity-100">{{ t("Column") }}</p>
      </button>
      <button
        @click="EnableOverlap"
        class="group flex w-[35px] flex-row gap-2 overflow-hidden rounded-md border-2 border-gray-500/50 bg-gray-800 p-1 hover:w-[110px]"
      >
        <Icon
          class="flex-shrink-0"
          name="material-symbols:overview-key-rounded"
        />
        <p class="opacity-0 group-hover:opacity-100">{{ t("Overlap") }}</p>
      </button>
    </article>

    <section id="overlap" class="relative flex w-full">
      <article
        id="frontend"
        class="absolute z-[1] ml-5 mt-[20px] flex w-max flex-col gap-5 rounded-md border-2 border-gray-500/50 bg-gray-500/25 p-3 opacity-100 shadow-lg shadow-black/50 backdrop-blur-sm"
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
        class="absolute z-[0] ml-0 mt-0 flex w-max flex-col gap-5 rounded-md border-2 border-gray-500/50 bg-gray-500/25 p-3 opacity-35 shadow-none shadow-black/50 backdrop-blur-none"
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
    <section
      id="column"
      class="m-3 hidden h-max w-max flex-row flex-wrap gap-1"
    >
      <article
        class="flex flex-col gap-2 rounded-md p-3 lg:border-2 lg:border-gray-500/50 lg:bg-gray-500/25"
      >
        <h2
          class="w-max rounded-md border-2 border-gray-300/25 bg-black/50 p-3 text-2xl uppercase"
        >
          Frontend
        </h2>
        <UtilsSkillFrontend />
      </article>
      <article
        class="flex flex-col gap-2 rounded-md p-3 lg:border-2 lg:border-gray-500/50 lg:bg-gray-500/25"
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

<i18n lang="json">
{
  "en": {
    "Column": "Column",
    "Overlap": "Overlap"
  },
  "fr": {
    "Column": "Colonne",
    "Overlap": "Ampiler"
  }
}
</i18n>

<style scoped>
* {
  transition:
    opacity 0.5s ease,
    margin 0.5s ease,
    width 0.5s ease;
}

#frontend,
#backend {
  will-change: opacity, transform, backdrop;
}
</style>
