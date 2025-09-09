<script setup lang="ts">
const { t } = useI18n({
  useScope: "local",
});

// TODO Move this in js file
function fadeInView() {
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
      threshold: 0.2, // commence l'animation quand 20% de l'élément est visible
    },
  );

  elements.forEach((el) => observer.observe(el));
}

onMounted(() => {
  fadeInView();
});
</script>

<template>
  <main class="w-full">
    <section class="mb-20 flex flex-col gap-10 lg:mx-20 lg:gap-60">
      <MobileSidebar class="flex lg:hidden" />
      <DesktopSidebar class="hidden lg:flex" />

      <MobileOptions class="flex lg:hidden" />
      <DesktopOptions class="hidden lg:flex" />

      <slot />

      <!-- Landing section -->
      <section
        class="flex grid h-[100vh] w-[100%] items-center md:grid-cols-[auto_1fr] lg:w-1/2"
        id="landing"
      >
        <ClientAboutMe />

        <section>
          <!-- TODO make the presentation video -->
          <!-- <DesktopShowcase class="hidden lg:flex" /> -->
        </section>
      </section>

      <!-- Wrapper/Skill section -->
      <section class="relative">
        <div class="absolute -top-20" id="skill" />
        <ClientWrapper data-tag="fade-up" class="lg:mx-auto" />
      </section>

      <section class="flex flex-col gap-[20em] xl:gap-0">
        <!-- Skill section -->
        <section
          data-tag="fade-up"
          class="flex h-[100vh] w-full flex-col gap-5 lg:h-max"
        >
          <DesktopCompetenceShowcase class="flex w-full justify-center" />
        </section>

        <!-- Projects Section -->

        <section
          data-tag="fade-up"
          class="relative flex w-full flex-col gap-[5em]"
        >
          <div class="absolute -top-20" id="project" />
          <h2
            class="mx-2 flex border-b-2 py-3 text-3xl uppercase md:mx-20 md:text-4xl"
          >
            {{ t("MyProject") }}
          </h2>

          <article class="flex flex-col gap-[5em]">
            <ClientFilter class="mx-auto" />
            <article
              class="flex flex-col items-center justify-center gap-[2em] md:mx-auto lg:w-2/4 lg:grid-cols-[1fr_1fr] xl:grid 2xl:grid-cols-[1fr_1fr_1fr]"
            >
              <ClientCard>
                <template #cardProject-img>
                  <NuxtImg
                    class="group-hover:opacity-50"
                    src="img/fluxrss.png"
                  />
                </template>

                <template #cardProject-iconlink>
                  <NuxtLink to="https://github.com/trending" target="_blank">
                    <Icon size="1.5em" name="mdi:github" />
                  </NuxtLink>
                </template>

                <template #cardProject-dateStart> 2025 </template>

                <template #cardProject-dateEnd> 2026 </template>

                <template #cardProject-title> FluxRSS </template>

                <template #cardProject-desc>
                  {{ t("fluxrss") }}
                </template>

                <template #fortag>
                  <UtilsTagsTailwindcss />
                  <UtilsTagsNuxt />
                  <UtilsTagsPersonnel />
                </template>
              </ClientCard>
            </article>
          </article>
        </section>
      </section>

      <!-- Contact section -->
      <section class="relative" data-tag="fade-up">
        <div class="absolute -top-20" id="contact" />
        <ClientOthers />
      </section>
    </section>
  </main>
</template>

<i18n lang="json">
{
  "en": {
    "MyProject": "My projects",
    "MyNextProject": "What would be my next project ?",
    "MyNextProject-Desc1": "Contact me if you are interest to work with me.",
    "MyNextProject-Desc2": "You can contact me on Linkedin, Facebook and GitHub with the buttons under here.",
    "fluxrss": "The goal to this project is to construct a rss flux custom on the content and the interface allowing me to have the total controle of what information i need or what content prioritise."
  },
  "fr": {
    "MyProject": "Mes projects",
    "MyNextProject": "Que sera mon prochain projet ?",
    "MyNextProject-Desc1": "Contactez moi si vous êtes intérèsser pour travailler avec moi.",
    "MyNextProject-Desc2": "Vous pouvez me contacter sur Linkedin, Facebook et GitHub avec les boutons ci-dessous.",
    "fluxrss": "Le but de ce projet est de me construire en flux rss customiser autant par le contenu que par l'interface me permettant d'avoir le controle total sur qu'elle information j'ai besoin ou qu'elle contenu priorisé."
  }
}
</i18n>

<style scoped>
main {
  height: 100%;
  overflow-x: hidden;
}

/* TODO Move this in specific file */

@media screen and (min-width: 1280px) {
  [data-tag="fade-up"] {
    will-change: transform, opacity;
    position: relative;
    opacity: 0;
    transform: translateY(30px);
    transition:
      opacity 1s ease,
      transform 0.5s ease;
  }

  [data-tag="fade-up"].visible {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
