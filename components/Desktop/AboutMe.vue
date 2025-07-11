<script setup lang="ts"></script>

<template>
  <article class="SlideInFrom_Left-Bounce w-full border-l-2 px-3 py-8">
    <article class="flex flex-col gap-3">
      <h1 class="flex flex-row flex-wrap gap-2 text-2xl font-bold md:text-4xl">
        {{ $t("aboutme") }} <strong>Léo</strong>
      </h1>
      <h2
        class="flex gap-2 border-b-2 border-gray-500 pb-3 text-lg font-bold md:text-2xl"
      >
        {{ $t("aboutme2") }}
        <strong class="homepage-skillshow"></strong>
      </h2>

      <article class="w-100 flex flex-wrap gap-3">
        <Icon
          class="hidden md:flex"
          size="2em"
          name="line-md:chevron-small-right"
        />
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
        <Icon
          class="hidden md:flex"
          size="2em"
          name="line-md:chevron-small-left"
        />
      </article>

      <article class="flex w-full flex-col gap-3 text-xl">
        <p>
          {{ $t("text1") }} <strong>{{ $t("autodidacte") }}</strong>,
          {{ $t("text2") }} <strong>frontend</strong> {{ $t("text3") }}
          <strong>backend</strong> {{ $t("text4") }}
          <strong>{{ $t("goodbase") }}</strong> {{ $t("text5") }}
          <strong>UI/UX</strong>.
        </p>
        <article class="flex gap-[1em]">
          <NuxtLink
            class="button button-secondary gap-1 font-bold hover:gap-2"
            to="#skills"
          >
            {{ $t("seeMore") }}
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
      <ClientSocialLink class="flex flex-row flex-wrap gap-5 md:gap-3" />
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
