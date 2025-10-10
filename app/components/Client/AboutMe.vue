<template>
  <section
    class="ssorbo animation-aboutMe flex flex-col gap-3 px-1 lg:border-l-2 lg:px-3 lg:py-8"
  >
    <slot name="addons" />
    <h1
      class="flex flex-wrap gap-2 px-3 text-2xl font-bold md:text-4xl lg:px-0"
    >
      {{ $t("AboutMe.Welcome") }} <strong>Léo</strong>
    </h1>
    <h2
      class="flex gap-2 border-b-2 border-gray-500 px-3 pb-3 text-lg font-bold md:text-2xl lg:px-0"
    >
      {{ $t("AboutMe.Iam") }}
      <strong class="homepage-skillshow"></strong>
    </h2>

    <UtilsSkillLine />

    <p class="text-md flex text-wrap text-center md:text-left lg:text-xl">
      <i18n-t keypath="AboutMe.Paragraphe.text" tag="p">
        <template #auto>
          <strong>{{ $t("AboutMe.Paragraphe.autodidacte") }}</strong>
        </template>
        <template #fe><strong>frontend</strong></template>
        <template #be><strong>backend</strong></template>
        <template #gb>
          <strong>{{ $t("AboutMe.Paragraphe.goodBase") }}</strong>
        </template>
        <template #ui><strong>UI/UX</strong></template>
      </i18n-t>
    </p>

    <div class="flex flex-wrap justify-center gap-5 lg:justify-start">
      <UtilsButtonSecondary to="#skill">
        <template #ButtonContent>
          {{ $t("AboutMe.Button.seeMore") }}
        </template>
      </UtilsButtonSecondary>

      <UtilsButtonPrimary to="#contact">
        <template #ButtonContent>
          {{ $t("AboutMe.Button.HireMe") }}
          <Icon size="1.5em" name="material-symbols:arrow-forward" />
        </template>
      </UtilsButtonPrimary>

      <!-- <UtilsButtonSecondary class="flex lg:hidden" to="#skills">
            <template #ButtonContent>
              {{ $t("AboutMe.Button.videoShowcase") }}
              <Icon name="material-symbols:youtube-activity" />
            </template>
          </UtilsButtonSecondary> -->
    </div>
    <ClientSocialLink />
  </section>
</template>

<style scoped>
.animation-aboutMe {
  @media (min-width: 1280px) {
    --animation-property: 1.5s ease;
    --XSlideStart: -100%;
    --XSlideOverflow: 10%;
    --XSlideEnd: 0;
  }
  @media (max-width: 1280px) {
    --animation-property: 1.5s ease;
    --YSlideStart: -100%;
    --YSlideOverflow: 10%;
    --YSlideEnd: 0;
  }
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
