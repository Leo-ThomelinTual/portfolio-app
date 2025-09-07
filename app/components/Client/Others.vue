<script setup lang="ts">
const { t } = useI18n({
  useScope: "local",
});
</script>

<template>
  <section
    id="contact"
    class="grid w-[100%] grid-cols-1 grid-rows-1 gap-2 md:w-full lg:grid-cols-[1fr_max-content] lg:grid-rows-[auto_auto]"
  >
    <article
      class="col-span-1 row-span-1 flex h-full flex-col gap-3 rounded-md border-2 border-gray-500/50 bg-black/30 p-2"
    >
      <h2 class="text-bold text-2xl">Mes projects futurs</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae,
        corporis molestias incidunt voluptates numquam minus distinctio
        perferendis harum ad magnam itaque saepe totam qui dolores nostrum
        pariatur esse. Iste, autem.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae,
        corporis molestias incidunt voluptates numquam minus distinctio
        perferendis harum ad magnam itaque saepe totam qui dolores nostrum
        pariatur esse. Iste, autem.
      </p>
      <h2 class="text-bold text-2xl">Qui je suis ?</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae,
        corporis molestias incidunt voluptates numquam minus distinctio
        perferendis harum ad magnam itaque saepe totam qui dolores nostrum
        pariatur esse. Iste, autem.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae,
        corporis molestias incidunt voluptates numquam minus distinctio
        perferendis harum ad magnam itaque saepe totam qui dolores nostrum
        pariatur esse. Iste, autem.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae,
        corporis molestias incidunt voluptates numquam minus distinctio
        perferendis harum ad magnam itaque saepe totam qui dolores nostrum
        pariatur esse. Iste, autem.
      </p>
    </article>
    <article
      class="col-span-1 row-span-3 flex h-max flex-col flex-wrap items-start gap-3 rounded-md border-2 border-gray-500/50 bg-black/30 p-2 md:h-full"
    >
      <h2
        class="mx-auto flex flex-wrap items-center gap-3 border-b-2 border-white px-4 py-2 text-2xl"
      >
        {{ t("UtilityLink") }} <Icon name="mdi:link" />
      </h2>

      <UtilsButtonTertiary
        to="/CV - Léo Thomelin-Tual.pdf"
        external
        download
        target="_blank"
      >
        <template #ButtonContent>
          <Icon name="mdi:download" />
          {{ t("Download") }}
        </template>
      </UtilsButtonTertiary>

      <!-- <UtilsButtonTertiary to="/portfolio-history">
        <template #ButtonContent>
          <Icon name="material-symbols-light:history" />
          {{ t("VisualHistory") }}
        </template>
      </UtilsButtonTertiary> -->

      <UtilsButtonTertiary
        to="https://github.com/Leo-ThomelinTual"
        target="_blank"
      >
        <template #ButtonContent>
          <Icon name="mdi:github" />
          {{ t("MyRepo") }}
        </template>
      </UtilsButtonTertiary>

      <UtilsButtonTertiary
        to="https://github.com/Leo-ThomelinTual/portfolio-app"
        target="_blank"
      >
        <template #ButtonContent>
          <Icon name="mdi:github" />
          {{ t("SourceCode") }}
        </template>
      </UtilsButtonTertiary>
    </article>

    <article
      class="col-span-1 row-span-2 flex h-max w-full flex-col flex-wrap gap-3 rounded-md border-2 border-gray-500/50 bg-black/30 p-4"
    >
      <h2 class="text-2xl">{{ t("MailContact") }}</h2>

      <article class="flex flex-wrap gap-2">
        <UtilsButtonTertiary to="/" target="_blank">
          <template #ButtonContent>
            <Icon name="mdi:linkedin" />
            LinkedIn
          </template>
        </UtilsButtonTertiary>

        <UtilsButtonTertiary to="/" target="_blank">
          <template #ButtonContent>
            <Icon name="mdi:facebook" />
            Facebook
          </template>
        </UtilsButtonTertiary>
      </article>
    </article>
  </section>
</template>

<i18n lang="json">
{
  "en": {
    "UtilityLink": "Utility link",
    "Download": "Download CV - Paper version",
    "VisualHistory": "Visual History of the portfolio",
    "MyRepo": "My Github repository",
    "SourceCode": "Source code",
    "MailContact": "Contact me by :",
    "Subject": "Subject",
    "SendEmail": "Send an Email"
  },
  "fr": {
    "UtilityLink": "Liens Utils",
    "Download": "Téléchargé CV - Version papier",
    "VisualHistory": "Historique visuel du portfolio",
    "MyRepo": "Mon repository GitHub",
    "SourceCode": "Code source",
    "MailContact": "Me contactez par :",
    "Subject": "Sujet",
    "SendEmail": "Envoyer un email"
  }
}
</i18n>
