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
      class="col-span-1 row-span-1 flex h-full flex-col gap-3 rounded-md border-2 border-gray-700 bg-black p-2 md:bg-black/30"
    >
      <h2 class="text-bold text-2xl">{{ t("WhoAmI") }}</h2>

      <p>
        {{ t("para1") }}
      </p>

      <h2 class="text-bold text-2xl">{{ t("AndNow") }}</h2>
      <p>
        {{ t("para2") }}
      </p>

      <h2 class="text-bold text-2xl">{{ t("MyFutureProject") }}</h2>
      <p>
        {{ t("para3") }}
      </p>
    </article>
    <article
      class="col-span-1 row-span-3 flex h-max flex-col flex-wrap items-start gap-3 rounded-md border-2 border-gray-700 bg-black/100 p-2 md:h-full md:bg-black/30"
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

      <UtilsButtonTertiary
        to="https://github.com/Leo-ThomelinTual/portfolio-app"
        target="_blank"
      >
        <template #ButtonContent>
          <Icon name="mdi:github" />
          {{ t("SourceCode") }}
        </template>
      </UtilsButtonTertiary>

      <UtilsButtonTertiary
        to="https://github.com/Leo-ThomelinTual"
        target="_blank"
      >
        <template #ButtonContent>
          <Icon name="mdi:github" />
          {{ t("MyRepo") }}
        </template>
      </UtilsButtonTertiary>
    </article>

    <article
      class="col-span-1 row-span-2 flex h-max w-full flex-col flex-wrap gap-3 rounded-md border-2 border-gray-700 bg-black p-4 md:bg-black/30"
    >
      <h2 class="text-2xl">{{ t("MailContact") }}</h2>

      <article class="flex flex-wrap gap-2">
        <UtilsButtonTertiary
          to="https://www.linkedin.com/in/leo-thomelintual/"
          target="_blank"
        >
          <template #ButtonContent>
            <Icon name="mdi:linkedin" />
            LinkedIn
          </template>
        </UtilsButtonTertiary>

        <UtilsButtonTertiary
          to="https://www.facebook.com/profile.php?id=61564035716349"
          target="_blank"
        >
          <template #ButtonContent>
            <Icon name="mdi:facebook" />
            Facebook
          </template>
        </UtilsButtonTertiary>

        <UtilsButtonTertiary
          to="mailto:leo.thomelintual@gmail.com"
          target="_blank"
        >
          <template #ButtonContent>
            <Icon name="mdi:email" />
            Email
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
    "MyRepo": "My Github",
    "SourceCode": "Source code",
    "MailContact": "Contact me by :",
    "Subject": "Subject",
    "SendEmail": "Send an Email",
    "WhoAmI": "Who am I?",
    "para1": "My name is Léo, and I started getting interested in web development when I was in high school. I began learning through online and freely accessible courses, which allowed me to acquire the basics of web development. After high school, I turned to a training program in web and mobile development, which enabled me to obtain a two-year degree, and left me with a few sleepless nights to catch up on.",
    "AndNow": "And now?",
    "para2": "Today, I create small personal projects out of curiosity, necessity, or simply for fun. On my GitHub, I share these projects, especially the ones I’m proud of. These projects also help me track my personal and professional growth, showing me what I’ve improved on and what I still need to work on. I always keep all my projects, from my very first HTML pages to the ones I’m not very proud of or that I don’t find visually or technically interesting.",
    "MyFutureProject": "My future projects",
    "para3": "Now, I am looking to gain experience in the professional world."
  },
  "fr": {
    "UtilityLink": "Liens Utils",
    "Download": "Téléchargé CV - Version papier",
    "VisualHistory": "Historique visuel du portfolio",
    "MyRepo": "Mon GitHub",
    "SourceCode": "Code source",
    "MailContact": "Me contacter par :",
    "Subject": "Sujet",
    "SendEmail": "Envoyer un email",
    "WhoAmI": "Qui je suis ?",
    "para1": "Je m'appelle Léo et j'ai commencé à m'intéresser au développement web quand j'étais au lycée. J'ai donc appris avec des cours en ligne et en libre accès, ce qui m'a permis d'acquérir les bases du développement web. Après le lycée, je me suis tourné vers une formation en développement web et web mobile, qui m'a permis d'obtenir un diplôme bac+2, et quelques nuits blanches à rattraper.",
    "AndNow": "Et maintenant ?",
    "para2": "Aujourd'hui, je crée des petits projets personnels par curiosité, par besoin ou par simple envie. Sur mon GitHub, je partage ces mêmes projets, surtout ceux dont je suis fier. Ces projets me permettent également de me situer dans mon évolution personnelle et professionnelle et de voir sur quoi je me suis amélioré et sur quoi je dois encore progresser. Je garde toujours tous mes projets, des toutes premières pages HTML aux projets dont je ne suis pas très fier ou que je ne trouve pas intéressants visuellement et techniquement.",
    "MyFutureProject": "Mes futurs projets",
    "para3": "À présent, je cherche à gagner de l'expérience dans le monde du travail."
  }
}
</i18n>
