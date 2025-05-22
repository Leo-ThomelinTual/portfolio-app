<script setup>
useHead({
  titleTemplate: "%s Compétences",
});
</script>
<template>
  <main>
    <Wrapper class="hidden md:flex" />
    <section class="absolute bottom-[0] right-[0] z-[-10]">
      <article class="blur-item-blue"></article>
    </section>
    <NuxtLink
      class="fixed bottom-0 right-0 text-3xl opacity-25 hover:opacity-100 transition-all duration-200"
      to="/"
      >🏓</NuxtLink
    >
    <section class="flex md:items-center h-[100vh] SlideInFrom_Left-Bounce">
      <section
        class="md:border-l-2 mx-4 md:ml-4 md:pl-3 py-8 flex flex-col gap-5"
      >
        <article class="flex flex-col gap-3 border-b border-gray-500 pb-3">
          <h2>A propos de mes <strong>Compétences.</strong></h2>
          <h3 class="text-4xl md:ml-10">
            <Icon name="material-symbols:arrow-forward-rounded" /><strong
              class="animation-title"
            ></strong>
          </h3>
        </article>

        <article class="card-text flex flex-wrap gap-3 text-5xl icon-container">
          <Icon name="line-md:chevron-small-right" />
          <Icon
            class="hover:translate-y-2 transition-all duration-200"
            name="vscode-icons:file-type-html"
          />
          <Icon
            class="hover:translate-y-2 transition-all duration-200"
            name="vscode-icons:file-type-css2"
          />
          <Icon
            class="hover:translate-y-2 transition-all duration-200"
            name="vscode-icons:file-type-php"
          />
          <Icon
            class="hover:translate-y-2 transition-all duration-200"
            name="vscode-icons:file-type-mysql"
          />
          <Icon
            class="hover:translate-y-2 transition-all duration-200"
            name="devicon:javascript"
          />
          <Icon
            class="hover:translate-y-2 transition-all duration-200"
            name="material-icon-theme:figma"
          />
          <Icon
            class="hover:translate-y-2 transition-all duration-200"
            name="octicon:mark-github-16"
          />
          <Icon
            class="hover:translate-y-2 transition-all duration-200"
            name="skill-icons:symfony-dark"
          />
          <Icon
            class="hover:translate-y-2 transition-all duration-200"
            name="devicon:bootstrap"
          />
          <Icon
            class="hover:translate-y-2 transition-all duration-200"
            name="devicon:tailwindcss"
          />
          <Icon name="line-md:chevron-small-left" />
        </article>
      </section>
    </section>
    <section class="flex flex-col gap-20 md:gap-[30em]">
      <CompetenceFrame>
        <template #competence-title>Symfony</template>
        <template #competence-subtitle>Symfony (Framework PHP)</template>
        <template #competence-text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          dicta molestiae. Ipsam temporibus eius nesciunt consectetur quam quae,
          aliquid quo eligendi neque velit aperiam excepturi perspiciatis error
          impedit? Voluptatibus, in.
        </template>
      </CompetenceFrame>
      <CompetenceFrame>
        <template #competence-title>PHP</template>
        <template #competence-subtitle>PHP</template>
        <template #competence-text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          dicta molestiae. Ipsam temporibus eius nesciunt consectetur quam quae,
          aliquid quo eligendi neque velit aperiam excepturi perspiciatis error
          impedit? Voluptatibus, in.
        </template>
      </CompetenceFrame>
    </section>
  </main>
  <blurItem class="absolute top-[150vh] right-[0] z-[-10]" />
</template>

<style scoped>
.animation-title::after {
  content: "";
  animation: animation_title 7s linear infinite alternate;
}
</style>
