<script setup lang="ts">
import { onMounted, onBeforeUnmount } from "vue";

let conceptTimeout = 0;

function toggleConcept() {
  const frontend = document.querySelector(".frontend");
  const backend = document.querySelector(".backend");

  if (frontend && backend) {
    frontend.classList.toggle("opacity-100");
    frontend.classList.toggle("opacity-20");

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
    backend.classList.toggle("opacity-20");

    backend.classList.toggle("shadow-lg");
    backend.classList.toggle("shadow-none");

    backend.classList.toggle("backdrop-blur-none");
    backend.classList.toggle("backdrop-blur-sm");

    backend.classList.toggle("mt-[20px]");
    backend.classList.toggle("mt-0");

    backend.classList.toggle("z-[1]");
    backend.classList.toggle("z-[0]");

    if (conceptTimeout) {
      clearTimeout(conceptTimeout);
    }

    conceptTimeout = setTimeout(() => toggleConcept(), 6000);
  }
}

function EnableColumnOrOverlap(is: string) {
  const overlapSection = document.querySelector("#overlap");
  const columnSection = document.querySelector("#column");

  if (is === "Column") {
    if (columnSection?.classList.contains("hidden")) {
      columnSection.classList.remove("hidden");
      columnSection.classList.add("flex");

      overlapSection?.classList.remove("flex");
      overlapSection?.classList.add("hidden");

      if (conceptTimeout) {
        clearTimeout(conceptTimeout);
      }
    }
  } else if (is === "Overlap") {
    if (overlapSection?.classList.contains("hidden")) {
      overlapSection.classList.remove("hidden");
      overlapSection.classList.add("flex");

      columnSection?.classList.remove("flex");
      columnSection?.classList.add("hidden");

      conceptTimeout = setTimeout(() => toggleConcept(), 6000);
    }
  }
}

function checkDim() {
  if (window.innerWidth <= 1280) {
    EnableColumnOrOverlap("Column");
  } else if (window.innerWidth > 1280) {
    EnableColumnOrOverlap("Overlap");
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
  <section class="relative flex flex-col">
    <slot name="addons" />
    <div class="z-[10] my-1 hidden w-max flex-row gap-2 text-nowrap xl:flex">
      <button
        @click="EnableColumnOrOverlap(`Column`)"
        class="group flex w-[35px] flex-row gap-2 overflow-hidden rounded-md border-2 border-gray-700 bg-black p-1 hover:w-[110px]"
      >
        <Icon class="flex-shrink-0" name="material-symbols:view-column-2" />
        <p class="opacity-0 group-hover:opacity-100">
          {{ $t("CompetenceShowcase.Button.Column") }}
        </p>
      </button>
      <button
        @click="EnableColumnOrOverlap(`Overlap`)"
        class="group flex w-[35px] flex-row gap-2 overflow-hidden rounded-md border-2 border-gray-700 bg-black p-1 hover:w-[130px]"
      >
        <Icon
          class="flex-shrink-0"
          name="material-symbols:overview-key-rounded"
        />
        <p class="opacity-0 group-hover:opacity-100">
          {{ $t("CompetenceShowcase.Button.Overlap") }}
        </p>
      </button>
    </div>

    <section id="overlap">
      <article
        class="frontend absolute z-[1] ml-5 mt-[20px] flex w-max flex-col gap-5 rounded-md border-2 border-gray-700 bg-black/35 p-3 opacity-100 shadow-lg shadow-black/50 backdrop-blur-sm"
      >
        <h2
          class="w-max rounded-md border-2 border-gray-700 p-3 text-2xl uppercase"
        >
          Frontend
        </h2>
        <UtilsSkillFrontend />
      </article>
      <article
        class="backend absolute z-[0] ml-0 mt-0 flex w-max flex-col gap-5 rounded-md border-2 border-gray-700 bg-black/35 p-3 opacity-20 shadow-none shadow-black/50 backdrop-blur-none"
      >
        <h2
          class="w-max rounded-md border-2 border-gray-700 p-3 text-2xl uppercase"
        >
          Backend
        </h2>
        <UtilsSkillBackend />
      </article>
    </section>

    <!-- Column section -->
    <section id="column" class="flex hidden h-max w-full flex-wrap gap-1">
      <article
        class="flex flex-col gap-2 rounded-md p-3 lg:border-2 lg:border-gray-700 lg:bg-black/35"
      >
        <h2
          class="w-max rounded-md border-2 border-gray-700 p-3 text-2xl uppercase"
        >
          Frontend
        </h2>
        <UtilsSkillFrontend />
      </article>
      <article
        class="flex flex-col gap-2 rounded-md p-3 lg:border-2 lg:border-gray-700 lg:bg-black/35"
      >
        <h2
          class="w-max rounded-md border-2 border-gray-700 p-3 text-2xl uppercase"
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
  transition:
    opacity 0.5s ease,
    margin 0.5s ease,
    width 0.5s ease;
}

.frontend,
.backend {
  will-change: opacity, transform, backdrop;
}
</style>
