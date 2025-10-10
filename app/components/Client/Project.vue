<template>
  <section class="flex flex-col gap-[5em]">
    <slot name="addons" />

    <UtilsTitle>
      <template #title>{{ $t("Index.Projects.Title") }}</template>
    </UtilsTitle>

    <ClientFilter class="mx-auto" />

    <ClientCardHandler />
  </section>
</template>
