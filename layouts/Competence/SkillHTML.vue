<script setup lang="ts">
import SkillView from "./SkillFrame.vue";
</script>

<template>
  <SkillView>
    <template #skill-name>- For HTML -</template>
    <template #skill-level>
      <LevelBar>
        <template #skill-name>Styling</template>
        <template #skill-level>6</template>
        <template #xpbar>
          <article
            class="w-1/4 h-full bg-orange-500 rounded-md slideIn"
          ></article
        ></template>
      </LevelBar>
    </template>
  </SkillView>
</template>

<style scoped>
.perspectivy {
  transform: perspective(1500px) rotateY(30deg) scale(1.09);
}

.slideIn {
  animation: slideIn 1s ease;
}

@keyframes slideIn {
  0% {
    transform: translateX(-150%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
