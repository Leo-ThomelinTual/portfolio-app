<script setup lang="ts">

import { Analytics } from "@vercel/analytics/nuxt";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { fadeInView } from "~/assets/AddonsAnimation/ts/AnimationHandler";
const { t } = useI18n({
  useScope: "local",
});

onMounted(() => {
  fadeInView(0.5);
});
</script>

<template>
  <main class="h-max w-full">
    <Analytics />
    <SpeedInsights />
    <!-- Sidebar and Option -->
    <aside>
      <MobileSidebar class="flex lg:hidden" />
      <DesktopSidebar class="hidden lg:flex" />

      <MobileOptions class="flex lg:hidden" />
      <DesktopOptions class="hidden lg:flex" />
    </aside>

    <!-- Make a grid with 100vh of space for every components -->
    <div
      class="my-20 flex flex-col gap-[20em] md:px-20 lg:my-0 lg:grid lg:grid-rows-[repeat(4,100vh)] lg:gap-0"
    >
      <!-- Landing section -->
      <section
        aria-labelledby="Partie accueil du portfolio"
        class="relative flex w-[100%] items-center md:grid md:grid-cols-[auto_1fr] lg:w-1/2"
        id="landing"
      >
        <ClientAboutMe />

        <!-- TODO make the presentation video -->
        <!-- <section>
          <DesktopShowcase class="hidden lg:flex" />
        </section> -->
      </section>

      <!-- Skill section -->
      <section
        data-tag="fade-up"
        aria-labelledby="Partie Compétence"
        class="relative flex items-center"
      >
        <div aria-hidden="true" class="absolute -top-20" id="skill" />
        <DesktopCompetenceShowcase />
      </section>

      <!-- Projects Section -->
      <section data-tag="fade-up" class="relative flex flex-col gap-[5em]">
        <div aria-hidden="true" class="absolute -top-20" id="project" />
        <h2
          class="mx-2 flex border-b-2 py-3 text-3xl uppercase md:mx-20 md:text-4xl"
        >
          {{ t("MyProject") }}
        </h2>

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
      </section>

      <!-- Contact section -->
      <section class="relative mb-10 flex self-end" data-tag="fade-up">
        <div aria-hidden="true" class="absolute -top-20" id="contact" />
        <ClientOthers />
      </section>
    </div>

    <div aria-hidden="true">
      <UtilsBubbleBluet
        class="fixed bottom-[150px] right-[0] z-[-10] hidden h-[25em] w-[40em] md:flex"
      />
      <UtilsBubbleBluet
        class="fixed left-[50%] top-[-450px] z-[-100] hidden h-[50em] w-[50em] -translate-x-1/2 md:flex"
      />
      <UtilsBubbleBlue
        class="fixed bottom-[0] left-[100px] z-[-10] h-[25em] w-[35em]"
      />
      <UtilsBubblePurple
        class="fixed bottom-[0] left-[0] z-[-10] h-[20em] w-[20em]"
      />
      <UtilsMapping class="hidden md:flex" />
    </div>
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
