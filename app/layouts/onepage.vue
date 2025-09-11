<script setup lang="ts">
import { fadeInView } from "~/assets/AddonsAnimation/js/Basic/function";
const { t } = useI18n({
  useScope: "local",
});

onMounted(() => {
  fadeInView(0.2);
});
</script>

<template>
  <main class="w-full">
    <section class="lg:gap-30 mb-20 flex flex-col gap-10 lg:mx-20">
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

        <!-- <section>
          TODO make the presentation video
          <DesktopShowcase class="hidden lg:flex" />
        </section> -->
      </section>

      <!-- Skill section -->
      <section class="relative flex flex-col gap-[20em] xl:gap-20">
        <div aria-hidden="true" class="absolute -top-20" id="skill" />
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
          <div aria-hidden="true" class="absolute -top-20" id="project" />
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
              <ClientNoFound class="col-span-3" />

              <ClientCard>
                <template #cardProject-img>
                  <NuxtImg src="img/fluxrss.png" />
                </template>

                <template #cardProject-iconlink>
                  <NuxtLink
                    to="https://github.com/Leo-ThomelinTual/FluxRSS"
                    target="_blank"
                  >
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
      <section class="relative">
        <div aria-hidden="true" class="absolute -top-20" id="contact" />
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
</style>
