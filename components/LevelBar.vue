<template>
  <section class="flex flex-col gap-3 p-3">
    <article class="flex flex-row gap-3 items-center uppercase">
      <h3><slot name="skill-name">Replaceable</slot></h3>
      <h4 class="opacity-60">Lvl : <slot name="skill-level">NA</slot> / 20</h4>
    </article>
    <article
      class="w-full h-[40px] bg-gray-500 border-2 border-gray-600 bg-opacity-25 rounded-md overflow-hidden"
    >
      <slot name="xpbar"> </slot>
    </article>
  </section>
</template>

<style scoped>

</style>
