<script setup lang="ts">
const { t } = useI18n({
  useScope: "local",
});
</script>

<template>
  <article
    class="ssorbo aboutme flex flex-col gap-3 px-1 lg:h-max lg:w-full lg:border-l-2 lg:px-3 lg:py-8"
  >
    <h1
      class="flex flex-wrap gap-2 px-3 text-2xl font-bold md:text-4xl lg:px-0"
    >
      {{ t("aboutme") }} <strong>Léo</strong>
    </h1>
    <h2
      class="flex gap-2 border-b-2 border-gray-500 px-3 pb-3 text-lg font-bold md:text-2xl lg:px-0"
    >
      {{ t("aboutme2") }}
      <strong class="homepage-skillshow"></strong>
    </h2>

    <UtilsSkillLine />

    <p class="text-md flex text-wrap text-center md:text-left lg:text-xl">
      <i18n-t keypath="about.full" tag="p">
        <template #auto>
          <strong>{{ t("about.autodidacte") }}</strong>
        </template>
        <template #fe><strong>frontend</strong></template>
        <template #be><strong>backend</strong></template>
        <template #gb>
          <strong>{{ t("about.goodbase") }}</strong>
        </template>
        <template #ui><strong>UI/UX</strong></template>
      </i18n-t>
    </p>

    <div class="flex flex-wrap justify-center gap-5 lg:justify-start">
      <UtilsButtonSecondary to="#skill">
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

      <!-- <UtilsButtonSecondary class="flex lg:hidden" to="#skills">
            <template #ButtonContent>
              {{ t("videoShowcase") }}
              <Icon name="material-symbols:youtube-activity" />
            </template>
          </UtilsButtonSecondary> -->
    </div>
    <ClientSocialLink />
  </article>
</template>

<i18n lang="json">
{
  "en": {
    "about": {
      "autodidacte": "autodidact",
      "goodbase": "good bases in Web Design",
      "full": "I learned web development in {auto}, thanks to various videos and free courses. My goal is to grow my skills in {fe} and {be}, and also learn other languages over time. I also have {gb} and I'm learning {ui}."
    }
  },
  "fr": {
    "about": {
      "autodidacte": "autodidacte",
      "goodbase": "bonnes bases en Web Design",
      "full": "J’ai appris à développer en {auto}, grâce à diverses vidéos et cours en libre accès. Mon but est d’élargir mes compétences en {fe} et en {be}, et d’apprendre d’autres langages avec le temps. J’ai aussi de {gb} et j’apprends {ui}."
    }
  }
}
</i18n>

<i18n lang="json">
{
  "en": {
    "aboutme": "Welcome, my name is",
    "aboutme2": "I am ",
    "seeMore": "See more",
    "videoShowcase": "See the presentation video",
    "HireMe": "Contact me"
  },
  "fr": {
    "aboutme": "Bonjour, je m'appelle",
    "aboutme2": "Je suis",
    "seeMore": "Voir plus",
    "videoShowcase": "Vidéo de présentation",
    "HireMe": "Me contacter"
  }
}
</i18n>

<style scoped>
.aboutme {
  --animation-property: 1.5s ease;
  --XSlideStart: -100%;
  --XSlideOverflow: 10%;
  --XSlideEnd: 0;
}

.homepage-skillshow::after {
  content: "";
  animation: homepageSkillshow 7s linear infinite;
}

@keyframes homepageSkillshow {
  0% {
    content: "Développeur Front-end.";
  }
  100% {
    content: "Développeur Web Junior.";
  }
}
</style>
