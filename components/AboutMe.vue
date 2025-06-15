<template>
  <section
    class="flex md:items-center h-[100vh] w-full md:w-1/2 px-2 md:px-0 md:mx-5 transition-blur-md duration-500"
  >
    <section class="md:border-l-2 pl-3 py-8 SlideInFrom_Left-Bounce">
      <article class="flex flex-col gap-3">
        <h1 class="md:flex gap-2 font-bold">
          Bonjour, je m'appelle <strong>Léo</strong>
        </h1>
        <h2
          class="mx-md-4 pb-3 flex gap-2 font-bold border-b-2 border-gray-500"
        >
          Je suis
          <strong class="homepage-skillshow"></strong>
        </h2>
        <article class="flex gap-3 flex-wrap text-4xl">
          <Icon name="line-md:chevron-small-right" />
          <Icon name="vscode-icons:file-type-html" />
          <Icon name="vscode-icons:file-type-css2" />
          <Icon name="vscode-icons:file-type-php" />
          <Icon name="vscode-icons:file-type-mysql" />
          <Icon name="devicon:javascript" />
          <Icon name="material-icon-theme:figma" />
          <Icon name="octicon:mark-github-16" />
          <Icon name="skill-icons:symfony-dark" />
          <Icon name="devicon:bootstrap" />
          <Icon name="devicon:tailwindcss" />
          <Icon name="line-md:chevron-small-left" />
        </article>
        <article class="text-xl flex flex-col gap-3">
          <p>
            J'ai appris à développer en <strong>autodidact</strong>, grâce à
            divers vidéo et cours en libre accès. Mon bût est d'élargir mes
            compétences partie <strong>front-end</strong> et la partie
            <strong>back-end</strong> et même d'apprendre d'autre langage dans
            le temps. J'ai aussi de <strong>bonne base en Web Design</strong> et
            j'essais d'apprendre <strong>UI/UX</strong>.
          </p>
          <article class="flex gap-[--grid-gap]">
            <NuxtLink
              class="button button-secondary gap-1 hover:gap-2 font-bold"
              to="/contact"
            >
              View more
            </NuxtLink>
            <NuxtLink
              class="button button-primary gap-1 hover:gap-2 font-bold"
              to="/contact"
            >
              Hire me
              <Icon size="1.5em" name="material-symbols:arrow-forward" />
            </NuxtLink>
          </article>
        </article>
      </article>
    </section>
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
