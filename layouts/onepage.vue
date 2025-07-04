<script setup>
const cards = ref([1, 2, 3, 4, 5, 6, 7]);
</script>

<template>
  <main class="mx-5 md:mx-15">
    <ClientSidebar class="hidden md:flex" />

    <slot />

    <section id="landing">
      <article>
        <ClientAboutMe />
      </article>

      <!-- Showcase need to not be in a article to avoid the blur effect -->
      <!-- TODO Need to be reworked to allow both video and image -->
      <ClientShowcase class="bg-[url('/img/nomansky.jpg')]" />

      <!-- Skill section -->
      <article
        id="skill"
        class="mx-auto mb-100 flex h-max w-full flex-col gap-5"
      >
        <ClientWrapper class="hidden md:flex" />

        <ClientConcept />
      </article>

      <!-- Projects Section -->
      <article id="project" class="flex flex-col items-center gap-[2em]">
        <h2 class="border-b-2 px-5 py-3 text-center text-4xl uppercase">
          Mes projets
        </h2>

        <!-- TODO need to do the filter system -->
        <ClientFilter />

        <article
          class="mx-2 flex flex-row flex-wrap justify-center gap-[3em] pt-[50px] pb-[100px] md:mx-auto md:w-[100%] md:py-[50px]"
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
                class="m-auto rounded-md brightness-[0.5] md:brightness-[1] md:group-hover:brightness-[0.5] md:hover:scale-[1.05]"
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
      </article>
      <article
        id="point-of-interest"
        class="mx-3 flex w-full flex-row flex-wrap gap-2 gap-y-25 2xl:mx-20"
      >
        <ClientPointofInterest />
      </article>
      <ClientOthers />

      <ClientOptions />
    </section>
  </main>

  <UtilsNotifications class="notification-success">
    <template #notification-title>Success</template>
    <template #notification-text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
      voluptatum eos natus tempore laborum.
    </template>
  </UtilsNotifications>
</template>

<style scoped>
main {
  height: 700vh;
}
</style>
