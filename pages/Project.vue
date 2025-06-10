<script setup>
import { ref } from "vue";
useHead({
  titleTemplate: "%s Projet",
});

const cards = ref([1, 2, 3, 4, 5, 6, 7]);
</script>

<template>
  <main>
    <section class="flex flex-col items-center gap-[2em] mt-[10em]">
      <h2 class="text-center px-5 uppercase">Mes projets personnel</h2>
      <p class="text-center px-10">
        Les différents projet afficher ici sont trouvable ici :
      </p>
      <NuxtLink
        class="flex gap-2"
        href="https://github.com/Leo-ThomelinTual?tab=repositories"
        target="_blank"
        ><Icon
          class="cursor-pointer"
          size="3em"
          name="octicon:mark-github-16" />
        <Icon class="cursor-pointer" size="3em" name="octicon:logo-github-16"
      /></NuxtLink>
    </section>

    <section
      class="flex flex-row flex-wrap justify-center md:w-[100%] mx-2 md:mx-auto gap-[3em] pt-[50px] pb-[100px] md:py-[50px]"
    >
      <CardProject v-for="card in cards" :key="card">
        <template #cardProject-link />
        <template #cardProject-iconlink>
          <NuxtLink to="https://github.com/trending" target="_blank">
            <Icon size="1.5em" name="mdi:github" />
          </NuxtLink>
          <NuxtLink to="https://github.com/trending" target="_blank">
            <Icon size="1.5em" name="majesticons:external-link-line" />
          </NuxtLink>
        </template>
        <template #cardProject-img>
          <img
            class="m-auto rounded-md md:hover:scale-[1.05] brightness-[0.5] md:brightness-[1] md:group-hover:brightness-[0.5]"
            src="../public/img/nomansky.jpg"
          />
        </template>

        <template #cardProject-title>TEST</template>
        <template #cardProject-dateStart>2019</template>
        <template #cardProject-dateEnd>2024</template>
        <template #cardProject-desc>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
          quisquam reiciendis. Quis quo blanditiis possimus id adipisci a,
          asperiores eaque illum maxime, magnam perferendis consequuntur ex
          excepturi atque aut. Dicta.
        </template>
        <template #fortag>
          <TagTailwindcss />
          <TagPhp />
          <TagNuxt />
          <TagSymfony />
          <TagReact />
          <TagNext />
          <TagBootstrap />
        </template>
      </CardProject>
    </section>
    <section class="flex flex-col items-center gap-[2em] mt-10">
      <h2 class="text-center px-5 uppercase">Les projets professionnel</h2>
      <p class="text-center px-10">
        Les liens des différents projet professionnel sont trouvable ici :
      </p>
    </section>
    <section
      class="flex flex-row flex-wrap justify-center md:w-[100%] mx-2 md:mx-auto gap-[3em] pt-[50px] pb-[100px] md:py-[50px]"
    >
      <CardProject v-for="card in cards" :key="card">
        <template #cardProject-link />
        <template #cardProject-img>
          <img
            class="m-auto rounded-md md:hover:scale-[1.05] brightness-[0.5] md:brightness-[1] md:group-hover:brightness-[0.5]"
            src="../public/img/skyrim.jpg"
          />
        </template>

        <template #cardProject-title>TEST</template>
        <template #cardProject-dateStart>2019</template>
        <template #cardProject-dateEnd>2024</template>
        <template #cardProject-desc>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
          quisquam reiciendis. Quis quo blanditiis possimus id adipisci a,
          asperiores eaque illum maxime, magnam perferendis consequuntur ex
          excepturi atque aut. Dicta.
        </template>
        <template #fortag>
          <TagTailwindcss />
          <TagPhp />
          <TagNuxt />
          <TagSymfony />
          <TagReact />
          <TagNext />
          <TagBootstrap />
        </template>
      </CardProject>
    </section>
  </main>
</template>

<style scoped></style>
