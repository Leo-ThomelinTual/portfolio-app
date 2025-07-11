<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});
</script>

<template>
  <section class="flex h-[100vh] flex-col items-center justify-center">
    <article
      class="relative mx-2 flex h-1/2 w-full flex-col items-center rounded-md bg-gray-100/75 p-5 outline-4 outline-[#4e1229] lg:mx-0 lg:w-1/2 lg:outline-offset-4"
    >
      <article
        class="z-max absolute top-[-40px] flex w-max rounded-md border-4 border-[#4e1229] bg-white p-2 lg:-left-5"
      >
        <h1 class="text-4xl">Erreur : {{ error?.statusCode }}</h1>
      </article>
      <h2 class="text-xl">Page introuvable</h2>
      <NuxtLink class="mt-auto rounded-md bg-blue-400 p-2 text-white" to="/"
        >Go back home</NuxtLink
      >
      <article
        class="absolute -bottom-11 flex w-full flex-row gap-5 rounded-md bg-white p-1 text-blue-600"
      >
        <NuxtLink to="/">Contacter le support</NuxtLink>
      </article>
    </article>
  </section>
</template>

<style></style>
