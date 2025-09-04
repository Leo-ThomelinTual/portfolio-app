<script setup lang="ts">
const { t } = useI18n({
  useScope: "local",
});
</script>

<template>
  <article
    class="SlideInFrom_Left-Bounce px-1 lg:h-max lg:w-full lg:border-l-2 lg:px-3 lg:py-8"
  >
    <article class="flex flex-col gap-3">
      <h1
        class="flex flex-row flex-wrap gap-2 px-3 text-2xl font-bold md:text-4xl lg:px-0"
      >
        {{ t("aboutme") }} <strong>Léo</strong>
      </h1>
      <h2
        class="flex gap-2 border-b-2 border-gray-500 px-3 pb-3 text-lg font-bold md:text-2xl lg:px-0"
      >
        {{ t("aboutme2") }}
        <strong class="homepage-skillshow"></strong>
      </h2>

      <article
        class="lg:w-100 flex w-3/4 flex-wrap justify-center gap-3 self-center lg:justify-start lg:self-start"
      >
        <Icon size="2em" name="vscode-icons:file-type-html" />
        <Icon size="2em" name="vscode-icons:file-type-css2" />
        <Icon size="2em" name="vscode-icons:file-type-php" />
        <Icon size="2em" name="vscode-icons:file-type-mysql" />
        <Icon size="2em" name="devicon:javascript" />
        <Icon size="2em" name="material-icon-theme:figma" />
        <Icon size="2em" name="octicon:mark-github-16" />
        <Icon size="2em" name="skill-icons:symfony-dark" />
        <Icon size="2em" name="devicon:bootstrap" />
        <Icon size="2em" name="devicon:tailwindcss" />
      </article>

      <article
        class="w-6/7 text-md flex text-center md:text-left flex-col gap-5 lg:w-full lg:gap-3 lg:text-xl"
      >
        <p>
          {{ t("text1") }} <strong>{{ t("autodidacte") }}</strong
          >, {{ t("text2") }} <strong>frontend</strong> {{ t("text3") }}
          <strong>backend</strong> {{ t("text4") }}
          <strong>{{ t("goodbase") }}</strong> {{ t("text5") }}
          <strong>UI/UX</strong>.
        </p>
        <article
          class="flex flex-wrap justify-center gap-[1em] lg:justify-start"
        >
          <UtilsButtonSecondary to="#skills">
            <template #ButtonContent>
              {{ t("seeMore") }}
            </template>
          </UtilsButtonSecondary>

          <UtilsButtonPrimary to="#contact">
            <template #ButtonContent>
              {{ t("HireMe") }}
              <Icon size="1.5em" name="material-symbols:arrow-forward" />
            </template>
          </UtilsButtonPrimary>

          <UtilsButtonSecondary class="flex lg:hidden" to="#skills">
            <template #ButtonContent>
              {{ t("videoShowcase") }}
              <Icon name="material-symbols:youtube-activity" />
            </template>
          </UtilsButtonSecondary>
        </article>
      </article>
      <ClientSocialLink
        class="my-5 flex flex-wrap gap-3 self-center lg:my-0 lg:self-start"
      />
    </article>
  </article>
</template>

<i18n lang="json">
{
  "en": {
    "aboutme": "Welcome, my name is",
    "aboutme2": "I am ",
    "autodidacte": "autodidact",
    "goodbase": "good bases in Web Design",
    "text1": "I learn web developpement in",
    "text2": "grace at a divers video and course in free access. My goal is to expand my skill part",
    "text3": "and the",
    "text4": "part and also learn others language in the time. I have also",
    "text5": "and i trying to learn",
    "seeMore": "See more",
    "videoShowcase": "See the presentation video",
    "HireMe": "Hire Me"
  },
  "fr": {
    "aboutme": "Bonjour, je m'appelle",
    "aboutme2": "Je suis",
    "autodidacte": "autodidacte",
    "goodbase": "bonnes bases en Web Design",
    "text1": "J'ai appris à développer en",
    "text2": "grâce à divers vidéo et cours en libre accès. Mon but est d'élargir mes compétences partie",
    "text3": "et la partie",
    "text4": "et même d'apprendre d'autres langages dans le temps. J'ai aussi de",
    "text5": "et j'essaye d'apprendre",
    "seeMore": "Voir plus",
    "videoShowcase": "Vidéo de présentation",
    "HireMe": "Me Recruter"
  }
}
</i18n>

<style scoped>
.homepage-skillshow::after {
  content: "";
  animation: homepageSkillshow 10s linear infinite;
}

@keyframes homepageSkillshow {
  0% {
    content: "Développeur Front-end.";
  }
  50% {
    content: "Développeur Web Junior.";
  }
  100% {
    content: "Web Designer.";
  }
}
</style>
