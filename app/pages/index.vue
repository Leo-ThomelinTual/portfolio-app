<script setup lang="ts">
import { Analytics } from "@vercel/analytics/nuxt";
import { fadeInView } from "~/assets/AddonsAnimation/ts/AnimationHandler";

definePageMeta({
  layout: "background-layout",
});

onMounted(() => {
  fadeInView(0.2);
});
</script>

<template>
  <main class="h-max w-full">
    <Analytics />

    <!-- Sidebar and Option -->
    <aside>
      <MobileSidebar class="flex lg:hidden" />
      <DesktopSidebar class="hidden lg:flex" />

      <MobileOptions class="flex lg:hidden" />
      <DesktopOptions class="hidden lg:flex" />
    </aside>

    <div
      class="my-20 flex flex-col gap-[20em] md:px-20 lg:my-0 lg:grid lg:grid-rows-[100vh,50vh,max-content,100vh] lg:gap-[5em]"
    >
      <!-- Landing section -->
      <ClientAboutMe
        aria-labelledby="Partie accueil du portfolio"
        class="relative flex self-center lg:w-1/2"
      >
        <template #addons>
          <div aria-hidden="true" class="absolute -top-1/2" id="landing" />
        </template>
      </ClientAboutMe>

      <!-- Skill section -->
      <DesktopCompetenceShowcase
        data-tag="fade-up"
        aria-labelledby="Partie Compétence"
      >
        <template #addons>
          <div aria-hidden="true" class="absolute -top-1/3" id="skill" />
        </template>
      </DesktopCompetenceShowcase>

      <!-- Projects Section -->
      <ClientProject data-tag="fade-up" class="relative">
        <template #addons>
          <div aria-hidden="true" class="absolute -top-20" id="project" />
        </template>
      </ClientProject>

      <!-- Contact section -->
      <ClientOthers class="relative mb-10 flex self-end" data-tag="fade-up">
        <template #addons>
          <div aria-hidden="true" class="absolute -top-20" id="contact" />
        </template>
      </ClientOthers>
    </div>
  </main>
</template>

<style scoped>
main {
  height: 100%;
  overflow-x: hidden;
}
</style>
