<script setup>
definePageMeta({
  layout: "onepage",
});
</script>

<template>
  <UtilsBubbleBluet
    class="fixed bottom-[150px] right-[0] z-[-10] h-[25em] w-[40em]"
  />
  <UtilsBubbleBluet
    class="fixed left-[50%] top-[-450px] z-[-100] hidden h-[50em] w-[50em] -translate-x-1/2 md:flex"
  />
  <UtilsBubbleBlue
    class="fixed bottom-[0] left-[100px] z-[-10] hidden h-[25em] w-[35em] md:flex"
  />
  <UtilsBubblePurple
    class="fixed bottom-[0] left-[0] z-[-10] h-[20em] w-[20em]"
  />
  <UtilsMapping class="hidden md:flex" />
</template>
