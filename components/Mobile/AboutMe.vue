<script setup lang="ts"></script>

<template>
  <article class="SlideInFrom_Left-Bounce px-1">
    <article class="flex flex-col gap-3">
      <h1 class="just flex flex-row flex-wrap gap-2 px-3 text-2xl font-bold">
        {{ $t("aboutme") }} <strong>Léo</strong>
      </h1>
      <h2
        class="flex gap-2 border-b-2 border-gray-500 px-3 pb-3 text-lg font-bold"
      >
        {{ $t("aboutme2") }}
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
          {{ $t("text1") }} <strong>{{ $t("autodidacte") }}</strong
          >, {{ $t("text2") }} <strong>frontend</strong> {{ $t("text3") }}
          <strong>backend</strong> {{ $t("text4") }}
          <strong>{{ $t("goodbase") }}</strong> {{ $t("text5") }}
          <strong>UI/UX</strong>.
        </p>
        <article class="flex flex-row flex-wrap justify-center gap-5">
          <NuxtLink
            class="button button-secondary gap-1 font-bold hover:gap-2"
            to="#skills"
          >
            Vidéo de présentation
            <Icon name="material-symbols:youtube-activity" />
          </NuxtLink>
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
