<script setup>
function toggleHomepageShowcase() {
  const showcase = document.querySelector("#showcase");
  const layer1 = document.querySelector("#homepageLayer1");
  if (showcase) {
    if (showcase.classList.contains("w-[97%]")) {
      showcase.classList.remove("w-[97%]");
      layer1.classList.remove("blur-md");
      showcase.classList.add("w-[40%]");
    } else {
      showcase.classList.remove("w-[40%]");
      showcase.classList.add("w-[97%]");
      layer1.classList.add("blur-md");
    }
  }
}
</script>

<template>
  <main>
    <section
      id="homepageLayer1"
      class="flex items-center h-[100vh] w-2/4 mx-5 transition-all duration-1000"
    >
      <section class="border-l-2 pl-3 py-8 SlideInFrom_Left-Bounce">
        <article class="flex flex-col gap-3">
          <h1 class="flex gap-2 font-bold">
            Bonjour, je m'appelle <strong>Léo</strong>
          </h1>
          <h2
            class="mx-md-4 pb-3 flex gap-2 font-bold border-b-2 border-gray-500"
          >
            Je suis <strong class="homepage-tempName"></strong>
          </h2>
          <article class="flex gap-3 text-4xl">
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
              le temps. J'ai aussi de
              <strong>bonne base en Web Design</strong> et j'essais d'apprendre
              <strong>UI/UX</strong>.
            </p>
            <NuxtLink
              class="button button-primary gap-1 font-bold"
              to="/contact"
            >
              Hire me
              <Icon size="1.5em" name="material-symbols:arrow-forward" />
            </NuxtLink>
          </article>
        </article>
      </section>
    </section>
    <section
      @click="toggleHomepageShowcase"
      id="showcase"
      class="w-[40%] h-[85%] border border-gray-500 flex bg-black z-10 rounded-md absolute top-2/4 right-10 transform -translate-y-1/2 bg-[url('~/public/images/skyrim.jpg')] bg-cover bg-center bg-no-repeat transition-all duration-1000 SlideInFrom_Right-Bounce"
    >
      <h3
        class="absolute -bottom-12 w-full text-center py-1 mt-3 rounded-md border border-gray-500 bg-gray-500 bg-opacity-25 uppercase font-bold hover:-bottom-11 transition-all duration-500"
      >
        Vidéo de Presentation
      </h3>
    </section>
    <section class="absolute top-[0] right-[0]">
      <article class="blur-item-blue"></article>
    </section>
  </main>
</template>

<style scoped></style>
