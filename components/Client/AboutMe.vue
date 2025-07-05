<script setup lang="ts"></script>

<template>
  <section class="flex h-[100vh] w-1/2 items-center px-2">
    <article class="SlideInFrom_Left-Bounce py-8 pl-3 md:border-l-2">
      <article class="flex flex-col gap-3">
        <h1 class="flex flex-row flex-wrap gap-2 text-4xl font-bold">
          Bonjour, je m'appelle <strong>Léo</strong>
        </h1>
        <h2
          class="mx-md-4 flex gap-2 border-b-2 border-gray-500 pb-3 text-2xl font-bold"
        >
          Je suis
          <strong class="homepage-skillshow"></strong>
        </h2>

        <article class="flex flex-wrap gap-3">
          <Icon size="2em" name="line-md:chevron-small-right" />
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
          <Icon size="2em" name="line-md:chevron-small-left" />
        </article>

        <article class="flex flex-col gap-3 text-xl">
          <p>
            J'ai appris à développer en <strong>autodidact</strong>, grâce à
            divers vidéo et cours en libre accès. Mon bût est d'élargir mes
            compétences partie <strong>front-end</strong> et la partie
            <strong>back-end</strong> et même d'apprendre d'autre langage dans
            le temps. J'ai aussi de <strong>bonne base en Web Design</strong> et
            j'essais d'apprendre <strong>UI/UX</strong>.
          </p>
          <article class="flex gap-[1em]">
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
        <ClientSocialLink class="flex flex-row flex-wrap" />
      </article>
    </article>
  </section>
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
