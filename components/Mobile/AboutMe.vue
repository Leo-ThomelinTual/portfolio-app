<script setup lang="ts"></script>

<template>
  <article class="SlideInFrom_Left-Bounce px-1">
    <article class="flex flex-col gap-3">
      <h1 class="just flex flex-row flex-wrap gap-2 px-3 text-2xl font-bold">
        Bonjour, je m'appelle <strong>Léo</strong>
      </h1>
      <h2
        class="flex gap-2 border-b-2 border-gray-500 px-3 pb-3 text-lg font-bold"
      >
        Je suis
        <strong class="homepage-skillshow"></strong>
      </h2>

      <article class="flex w-2/3 flex-wrap justify-center gap-3 self-center">
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

      <article class="text-md w-6/7 flex flex-col gap-5">
        <p>
          J'ai appris à développer en <strong>autodidact</strong>, grâce à
          divers vidéo et cours en libre accès. Mon bût est d'élargir mes
          compétences partie <strong>front-end</strong> et la partie
          <strong>back-end</strong> et même d'apprendre d'autre langage dans le
          temps. J'ai aussi de <strong>bonne base en Web Design</strong> et
          j'essais d'apprendre <strong>UI/UX</strong>.
        </p>
        <article class="flex justify-center gap-5">
          <NuxtLink
            class="button button-secondary gap-1 font-bold hover:gap-2"
            to="#skills"
          >
            Vidéo de présentation
          </NuxtLink>
          <NuxtLink
            class="button button-secondary gap-1 font-bold hover:gap-2"
            to="#skills"
          >
            View more
          </NuxtLink>
          <NuxtLink
            class="button button-primary gap-1 font-bold hover:gap-2"
            to="#skills"
          >
            Hire me
            <Icon size="1.5em" name="material-symbols:arrow-forward" />
          </NuxtLink>
        </article>
      </article>
      <ClientSocialLink
        class="my-5 flex flex-row flex-wrap gap-5 self-center"
      />
    </article>
  </article>
</template>

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
