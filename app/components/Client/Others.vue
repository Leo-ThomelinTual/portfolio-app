<template>
  <section
    id="contact"
    class="grid w-[100%] grid-cols-1 grid-rows-1 gap-2 md:w-full lg:grid-cols-[1fr_max-content] lg:grid-rows-[auto_auto]"
  >
    <slot name="addons" />
    <article
      class="col-span-1 row-span-1 flex h-full flex-col gap-3 rounded-md border-2 border-gray-700 bg-black p-2 md:bg-black/30"
    >
      <h2 class="text-bold text-2xl">{{ $t("Others.Title1") }}</h2>

      <p>
        {{ $t("Others.Paragraphe1") }}
      </p>

      <h2 class="text-bold text-2xl">{{ $t("Others.Title2") }}</h2>
      <p>
        {{ $t("Others.Paragraphe2") }}
      </p>

      <h2 class="text-bold text-2xl">{{ $t("Others.Title3") }}</h2>
      <p>
        {{ $t("Others.Paragraphe3") }}
      </p>
    </article>
    <article
      class="col-span-1 row-span-3 flex h-max flex-col flex-wrap items-start gap-3 rounded-md border-2 border-gray-700 bg-black/100 p-2 md:h-full md:bg-black/30"
    >
      <h2
        class="mx-auto flex flex-wrap items-center gap-3 border-b-2 border-white px-4 py-2 text-2xl"
      >
        {{ $t("Others.UtilityLink.Title") }} <Icon name="mdi:link" />
      </h2>

      <UtilsButtonTertiary
        class="w-full"
        to="/CV - Léo Thomelin-Tual.pdf"
        external
        download
        target="_blank"
      >
        <template #ButtonContent>
          <Icon name="mdi:download" />
          {{ $t("Others.UtilityLink.Button.Download") }}
        </template>
      </UtilsButtonTertiary>

      <UtilsButtonTertiary
        class="w-full"
        to="https://github.com/Leo-ThomelinTual"
        target="_blank"
      >
        <template #ButtonContent>
          <Icon name="mdi:github" />
          {{ $t("Others.UtilityLink.Button.GithubRepo") }}
        </template>
      </UtilsButtonTertiary>

      <h2
        class="mx-auto flex flex-wrap items-center gap-3 border-b-2 border-white px-4 py-2 text-2xl"
      >
        {{ $t("Others.ContactLink.Title") }} <Icon name="mdi:link" />
      </h2>

      <UtilsButtonTertiary
        class="w-full"
        to="https://www.linkedin.com/in/leo-thomelintual/"
        target="_blank"
      >
        <template #ButtonContent>
          <Icon name="mdi:linkedin" />
          LinkedIn
        </template>
      </UtilsButtonTertiary>

      <UtilsButtonTertiary
        class="w-full"
        to="https://www.facebook.com/profile.php?id=61564035716349"
        target="_blank"
      >
        <template #ButtonContent>
          <Icon name="mdi:facebook" />
          Facebook
        </template>
      </UtilsButtonTertiary>

      <UtilsButtonTertiary
        class="w-full"
        to="mailto:leo.thomelintual@gmail.com"
        target="_blank"
      >
        <template #ButtonContent>
          <Icon name="mdi:email" />
          Email
        </template>
      </UtilsButtonTertiary>
    </article>

    <article
      class="col-span-1 row-span-2 flex h-max w-full flex-col flex-wrap gap-3 rounded-md border-2 border-gray-700 bg-black p-4 md:bg-black/30"
    />
  </section>
</template>
