<script setup>
import ContactLayout from "~/layouts/ContactLayout.vue";
import ProjectCards from "~/layouts/ProjectCards.vue";
import TestNavbar from "~/layouts/TestNavbar.vue";

useHead({
  titleTemplate: "%s Onepage",
});
</script>

<template>
  <main class="grid grid-cols-[auto_1fr]">
    <article class="m-3">
      <TestNavbar />
    </article>

    <article class="flex flex-col gap-3">
      <AboutMe />
      <Showcase class="absolute bg-[url('~/public/img/nomansky.jpg')]" />
      <Competence class="h-[50vh]" />
      <Wrapper class="hidden md:flex" />
      <ProjectCards />
      <ContactLayout />
    </article>
  </main>
</template>
