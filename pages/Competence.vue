<script setup>
useHead({
  titleTemplate: "%s Compétences",
});
</script>
<template>
  <main>
    <Competence />
    <Wrapper class="hidden md:flex" />
    <section class="flex flex-col gap-20 md:gap-[30em]">
      <CompetenceFrame>
        <template #competence-title>Symfony</template>
        <template #competence-subtitle>Symfony (Framework PHP)</template>
        <template #competence-text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          dicta molestiae. Ipsam temporibus eius nesciunt consectetur quam quae,
          aliquid quo eligendi neque velit aperiam excepturi perspiciatis error
          impedit? Voluptatibus, in.
        </template>
      </CompetenceFrame>
      <CompetenceFrame>
        <template #competence-title>PHP</template>
        <template #competence-subtitle>PHP</template>
        <template #competence-text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          dicta molestiae. Ipsam temporibus eius nesciunt consectetur quam quae,
          aliquid quo eligendi neque velit aperiam excepturi perspiciatis error
          impedit? Voluptatibus, in.
        </template>
      </CompetenceFrame>
    </section>
  </main>
</template>

<style scoped></style>
