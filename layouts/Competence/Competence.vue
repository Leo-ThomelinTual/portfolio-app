<script setup lang="ts">
import SkillCSS from "./SkillCSS.vue";
import SkillGrid from "./SkillGrid.vue";
import SkillHTML from "./SkillHTML.vue";
import SkillSelector from "./SkillSelector.vue";
</script>

<template>
  <section
    class="flex flex-rows items-center justify-between gap-2 mx-3 2xl:mx-20"
  >
    <SkillSelector />
    <SkillCSS class="hidden" />
    <SkillHTML class="hidden" />
    <SkillGrid />
  </section>
</template>
