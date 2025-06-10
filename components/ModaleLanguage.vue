<script setup></script>
<template>
  <section
    class="fixed bottom-0 flex flex-col m-2 p-3 w-max bg-black bg-opacity-50 rounded-md z-[1000]"
  >
    <p>Disponible in :</p>
    <section class="flex gap-[--grid-gap]">
      <article class="flex flex-col text-center group">
        <Icon
          class="hover:scale-105 transition-all ease-in-out"
          size="2rem"
          name="twemoji:flag-france"
        />
      </article>
      <article class="flex flex-col text-center group">
        <Icon
          class="hover:scale-105 transition-all ease-in-out"
          size="2rem"
          name="twemoji:flag-for-flag-united-kingdom"
        />
      </article>
    </section>
  </section>
</template>
<style scoped></style>
