<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});
</script>

<template>
  <section class="flex h-[100vh] flex-col items-center justify-center">
    <article
      class="relative mx-2 flex h-1/2 w-full flex-col rounded-md bg-gray-500/50 p-5 outline-4 outline-red-500 lg:mx-0 lg:w-1/2 lg:outline-offset-4"
    >
      <article
        class="z-max absolute top-[-40px] flex w-max rounded-md border-4 border-[--primaryColor] bg-[--secondaryColor] p-2 shadow-xl lg:-left-5"
      >
        <h1 class="text-4xl">Erreur : {{ error?.statusCode }}</h1>
      </article>
      <h2 class="text-end text-xl">Page introuvable</h2>
      <p class="my-auto text-center">
        Il semble que la page que vous rechercher n'existe pas.
      </p>
      <UtilsButtonSecondary class="mx-auto mt-auto" to="/">
        <template #ButtonContent> Retour au menu </template>
      </UtilsButtonSecondary>
    </article>
    
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
  </section>
</template>
