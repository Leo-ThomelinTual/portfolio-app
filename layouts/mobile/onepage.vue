<script setup>
const cards = ref([1, 2, 3]);
</script>

<template>
  <main
    class="grid-rows-[repeat(auto, minmax(0, 1fr))] grid w-full px-0 lg:px-20"
  >
    <MobileSidebar class="flex lg:hidden" />
    <MobileOptions class="flex md:hidden" />

    <slot />

    <!-- Landing section -->
    <section
      class="row-span-1 flex h-[100vh] w-[400px] items-center md:w-1/2"
      id="landing"
    >
      <MobileAboutMe class="flex md:hidden" />
    </section>

    <!-- Skill section -->
    <section
      id="skill"
      class="row-span-1 mx-auto flex h-max w-full flex-col gap-5"
    >
      <ClientWrapper class="hidden md:flex" />

      <ClientConcept class="hidden md:flex" />
    </section>

    <!-- Projects Section -->

    <section
      id="project"
      class="row-span-1 grid grid-rows-[1fr_1fr] items-center gap-[1em]"
    >
      <h2
        class="row-span-1 mx-auto w-max border-b-2 py-3 text-3xl uppercase md:text-4xl"
      >
        Mes projets
      </h2>

      <!-- TODO need to do the filter system -->
      <ClientFilter class="row-span-1 mx-auto" />

      <article
        class="row-span-2 mx-auto grid w-max grid-cols-[1fr] gap-[2em] md:grid-cols-[1fr_1fr_1fr]"
      >
        <MobileCard class="flex md:hidden" v-for="card in cards" :key="card">
          <template #cardProject-img>
            <img src="/img/Frame-3.png" alt="" />
          </template>
          <template #cardProject-iconlink>
            <NuxtLink to="https://github.com/trending" target="_blank">
              <Icon size="1.5em" name="mdi:github" />
            </NuxtLink>
            <NuxtLink to="https://github.com/trending" target="_blank">
              <Icon size="1.5em" name="majesticons:external-link-line" />
            </NuxtLink>
          </template>
          <template #cardProject-dateStart> 2021 </template>
          <template #cardProject-dateEnd> 2022 </template>
          <template #cardProject-title> TitleMobile </template>
          <template #cardProject-desc>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
            tempora eaque dolorem magnam odio placeat officiis omnis officia
            voluptatum voluptates consequuntur ad consequatur itaque, quos et
            deleniti sed porro ducimus!
          </template>
          <template #fortag>
            <UtilsTagsTailwindcss />
            <UtilsTagsNuxt />
          </template>
        </MobileCard>
      </article>
    </section>
    <section
      id="point-of-interest"
      class="row-span-1 my-20 flex w-full gap-2 md:justify-center"
    >
      <ClientPointofInterest />
    </section>
    <ClientOthers />
  </main>
</template>

<style scoped>
main {
  height: 100%;
}
</style>
