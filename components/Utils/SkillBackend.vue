<script setup lang="ts">
function functiontest() {
  console.log("test");
}
</script>

<template>
  <section class="flex h-max w-[100%] flex-row flex-wrap gap-2 rounded-md">
    <UtilsSkillFrame class="mysql" @click="functiontest">
      <template #skill-icon>
        <Icon size="7em" name="vscode-icons:file-type-mysql" />
      </template>
      <template #skill-name>mysql</template>
    </UtilsSkillFrame>

    <UtilsSkillFrame class="symfony" @click="functiontest">
      <template #skill-icon>
        <Icon size="7em" name="skill-icons:symfony-dark" />
      </template>
      <template #skill-name>symfony</template>
    </UtilsSkillFrame>
  </section>
</template>
