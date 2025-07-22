<script setup lang="ts">
onMounted(() => {
  const elements = document.querySelectorAll('[data-tag="fade-up"]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          el.classList.add("visible");
        } else {
          el.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.2, // commence l'animation quand 10% de l'élément est visible
    },
  );

  elements.forEach((el) => observer.observe(el));
});

const cards = ref([1, 2]);
</script>

<template>
  <main class="w-full">
    <section class="mb-20 flex flex-col gap-20 lg:mx-20 lg:gap-60">
      <MobileSidebar class="flex lg:hidden" />
      <DesktopSidebar class="hidden lg:flex" />

      <MobileOptions class="flex lg:hidden" />
      <DesktopOptions class="hidden lg:flex" />

      <section
        class="fixed right-3 z-[1000] my-20 hidden flex-col gap-3 md:flex"
      >
        <UtilsNotifications class="notification-success">
          <template #notification-title>Success</template>
          <template #notification-text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            voluptatum eos natus tempore laborum.
          </template>
        </UtilsNotifications>
      </section>

      <slot />

      <!-- Landing section -->
      <section
        class="flex grid h-[100vh] w-[100%] items-center md:grid-cols-[auto_1fr] lg:w-1/2"
        id="landing"
      >
        <ClientAboutMe />

        <section>
          <DesktopShowcase class="hidden lg:flex" />
          <UtilsEasterEggPong class="hidden" />
        </section>
      </section>

      <!-- Wrapper section -->
      <section id="skill">
        <ClientWrapper data-tag="fade-up" class="lg:mx-auto" />
      </section>

      <!-- Skill section -->
      <section data-tag="fade-up" class="flex h-max w-full flex-col gap-5">
        <DesktopCompetenceShowcase class="flex w-full justify-center" />
      </section>

      <!-- Projects Section -->

      <section id="project" class="flex w-full flex-col gap-[5em]">
        <h2
          data-tag="fade-up"
          class="mx-2 flex border-b-2 py-3 text-3xl uppercase md:mx-20 md:text-4xl"
        >
          Mes projets
        </h2>

        <article data-tag="fade-up" class="flex flex-col gap-[5em]">
          <ClientFilter class="mx-auto" />
          <article
            class="mx-auto flex flex-col items-center gap-[2em] lg:w-2/4 lg:grid-cols-[1fr_1fr] lg:justify-center xl:grid 2xl:grid-cols-[1fr_1fr_1fr]"
          >
            <ClientCard v-for="card in cards" :key="card">
              <template #></template>
              <template #cardProject-img>
                <NuxtImg
                  class="group-hover:opacity-50"
                  src="/img/Frame-3.png"
                />
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
                voluptatum voluptates consequuntur ad consequatur itaque, quos
                et deleniti sed porro ducimus!
              </template>

              <template #fortag>
                <UtilsTagsTailwindcss />
                <UtilsTagsNuxt />
                <UtilsTagsBootstrap />
              </template>
            </ClientCard>

            <ClientDefaultCard>
              <template #cardProject-title
                >Que sera mon prochain projet ?
              </template>
              <template #cardProject-desc>
                Contactez moi si vous êtes intérèsser pour travailler avec moi.
                <br />
                Vous pouvez me contacter sur Linkedin, Facebook et GitHub avec
                les boutons ci-dessous.
              </template>
              <template #fortag>
                <UtilsTagsFacebook to="www.facebook.com" />
                <UtilsTagsLinkedin to="www.facebook.com" />
                <UtilsTagsGitHub to="www.facebook.com" />
              </template>
            </ClientDefaultCard>
          </article>
        </article>
      </section>

      <section
        id="point-of-interest"
        class="my-20 flex hidden w-full gap-2 md:justify-center"
      >
        <ClientPointofInterest />
      </section>

      <ClientOthers data-tag="fade-up" />
    </section>
  </main>
</template>

<style scoped>
main {
  height: 100%;
  overflow-x: hidden;
}

[data-tag="fade-up"] {
  opacity: 0;
  transform: translateY(90px);
  transition:
    opacity 1s ease,
    transform 0.5s ease;
}

[data-tag="fade-up"].visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
