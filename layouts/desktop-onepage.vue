<script setup>
const cards = ref([1, 2, 3, 4, 5, 6, 7]);
</script>

<template>
  <main class="grid-rows-auto grid px-0 lg:px-20">
    <ClientSidebar class="hidden lg:flex" />

    <slot />

    <!-- Landing section -->
    <section class="row-span-1" id="landing">
      <ClientAboutMe />

      <!-- TODO Need to be reworked to allow both video and image -->
      <ClientShowcase class="hidden bg-[url('/img/nomansky.jpg')] lg:flex" />
    </section>

    <!-- Skill section -->
    <section
      id="skill"
      class="row-span-1 mx-auto flex h-max w-full flex-col gap-5"
    >
      <ClientWrapper class="hidden md:flex" />

      <ClientConcept class="flex" />
    </section>

    <!-- Projects Section -->
    <section
      id="project"
      class="row-span-1 grid grid-rows-2 items-center gap-[1em]"
    >
      <h2
        class="row-span-1 mx-auto w-1/2 border-b-2 py-3 text-center text-4xl uppercase"
      >
        Mes projets
      </h2>

      <!-- TODO need to do the filter system -->
      <ClientFilter class="row-span-1" />

      <article
        class="row-span-1 grid w-max grid-cols-[1fr_1fr_1fr] gap-[1em] md:mx-auto"
      >
        <ClientCardProject v-for="card in cards" :key="card">
          <template #cardProject-link />
          <template #cardProject-iconlink>
            <NuxtLink to="https://github.com/trending" target="_blank">
              <Icon size="1.5em" name="mdi:github" />
            </NuxtLink>
            <NuxtLink to="https://github.com/trending" target="_blank">
              <Icon size="1.5em" name="majesticons:external-link-line" />
            </NuxtLink>
          </template>
          <template #cardProject-img>
            <img
              class="m-auto rounded-md brightness-[0.5] md:brightness-[1] md:hover:scale-[1.05] md:group-hover:brightness-[0.5]"
              src="/img/nomansky.jpg"
            />
          </template>

          <template #cardProject-title>TEST</template>
          <template #cardProject-dateStart>2019</template>
          <template #cardProject-dateEnd>2024</template>
          <template #cardProject-desc>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
            quisquam reiciendis. Quis quo blanditiis possimus id adipisci a,
            asperiores eaque illum maxime, magnam perferendis consequuntur ex
            excepturi atque aut. Dicta.
          </template>
          <template #fortag>
            <UtilsTagsTailwindcss />
            <UtilsTagsPhp />
            <UtilsTagsNuxt />
            <UtilsTagsSymfony />
            <UtilsTagsReact />
            <UtilsTagsNext />
            <UtilsTagsBootstrap />
            <UtilsTagsProfessionnal />
          </template>
        </ClientCardProject>
      </article>
    </section>
    <section
      id="point-of-interest"
      class="gap-y-25 row-span-1 flex w-full gap-2"
    >
      <ClientPointofInterest />
    </section>
    <ClientOthers />

    <section>
      <ClientOptions />

      <UtilsNotifications class="notification-success top-[8%]">
        <template #notification-title>Success</template>
        <template #notification-text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
          voluptatum eos natus tempore laborum.
        </template>
      </UtilsNotifications>
    </section>
  </main>
</template>

<style scoped>
main {
  height: 700vh;
}
</style>
