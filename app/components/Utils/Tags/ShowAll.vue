<script setup lang="ts">
const { t } = useI18n({
  useScope: "local",
});
</script>

<template>
  <UtilsTagsTemplates id="ShowAll">
    <template #frameworkName>{{ t("All") }}</template>
    <template #frameworkIcon><Icon name="skill-icons:c" /></template>
  </UtilsTagsTemplates>
</template>
<i18n lang="json">
{
  "en": {
    "All": "All"
  },
  "fr": {
    "All": "Tout"
  }
}
</i18n>
