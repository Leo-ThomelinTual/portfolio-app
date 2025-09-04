<script setup lang="ts">
const { t } = useI18n({
  useScope: "local",
});

function expander() {
  const expander = document.querySelectorAll("#expanders");

  if (expander) {
    expander.forEach((expand) => {
      expand.classList.toggle("h-max");
      expand.classList.toggle("h-0");
    });
  }
}
</script>

<template>
  <section id="card" class="flex w-[390px] flex-col md:w-[450px]">
    <section
      class="relative flex flex-col gap-2 rounded-t-xl border-x-2 border-t-2 border-gray-500/50 bg-black/50 p-3"
    >
      <NuxtImg class="rounded-md" src="/img/Frame-3.png" />

      <h2 class="text-xl">Title</h2>
      <div class="h-[2px] w-full rounded-md bg-gray-500" />
      <p class="text-center">2020 -> 2020</p>
    </section>

    <section
      class="flex h-max w-full flex-col gap-3 rounded-b-xl border-x-2 border-b-2 border-gray-500/50 bg-black/50 p-2"
    >
      <article class="flex items-center justify-between">
        <utils-button-primary to="/">
          <template #ButtonContent>Accéder au site</template>
        </utils-button-primary>

        <button @click="expander">
          <Icon size="2em" name="mdi:chevron-down" />
        </button>
      </article>
      <div class="flex flex-wrap gap-2"><slot name="fortags" /></div>

      <article id="expanders" class="w- h-0 overflow-hidden text-justify">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ullam
          commodi sed odio iusto vitae. Quasi nulla debitis officiis reiciendis
          eius culpa veritatis. Qui vitae, nisi illum exercitationem dicta
          incidunt?
        </p>
      </article>
    </section>
  </section>
</template>

<i18n lang="json">
{
  "en": {
    "ClickToAccess": "Click to get access to the project"
  },
  "fr": {
    "ClickToAccess": "Click pour accéder projet"
  }
}
</i18n>

<style scoped>
* {
  transition: all 0.5s ease;
}

@media (min-width: 1024px) {
  .case {
    transform-style: preserve-3d;
  }

  .case:hover {
    transform: perspective(1000px) rotateY(10deg) scale(1.05);
  }
}
</style>
