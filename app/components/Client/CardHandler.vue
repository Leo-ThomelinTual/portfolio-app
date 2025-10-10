<template>
  <article
    class="flex flex-col gap-[2em] md:mx-auto lg:w-2/4 lg:grid-cols-[1fr_1fr] xl:grid 2xl:grid-cols-[1fr_1fr_1fr]"
  >
    <ClientNoFound class="col-span-3" />

    <ClientCard>
      <template #cardProject-img>
        <NuxtImg src="img/fluxrss.png" />
      </template>

      <template #cardProject-iconlink>
        <NuxtLink
          to="https://github.com/Leo-ThomelinTual/FluxRSS"
          target="_blank"
        >
          <Icon size="1.5em" name="mdi:github" />
        </NuxtLink>
      </template>

      <template #cardProject-dateStart> 2025 </template>
      <template #cardProject-dateEnd> 2026 </template>
      <template #cardProject-title> FluxRSS </template>

      <template #cardProject-desc>
        {{ $t("CardHandler.FluxRSS.description") }}
      </template>

      <template #fortag>
        <UtilsTagsTailwindcss />
        <UtilsTagsNuxt />
        <UtilsTagsPersonnel />
      </template>
    </ClientCard>
  </article>
</template>
