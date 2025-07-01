<script setup>
import Competences from "~/layouts/Competence/Competence.vue";
import PointofInterest from "~/layouts/PointofInterest.vue";
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

    <article class="flex flex-col gap-[2em]">
      <AboutMe />
      <Showcase class="absolute bg-[url('~/public/img/nomansky.jpg')]" />
      <Competences />
      <Wrapper class="hidden md:flex" />
      <ProjectCards />
      <PointofInterest />
    </article>
  </main>
</template>
