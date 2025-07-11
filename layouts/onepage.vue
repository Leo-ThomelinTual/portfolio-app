<script setup>
import { useIsMobile } from "~/composables/useIsMobile";

const { isMobile } = useIsMobile();
const cards = ref([1, 2, 3]);
</script>

<template>
  <main class="w-full">
    <section class="flex flex-col gap-20 md:mx-20">
      <Transition name="fade">
        <MobileSidebar v-if="isMobile" />
        <!-- <DesktopSidebar v-else /> -->
        <DesktopNewSidebar v-else />
      </Transition>

      <Transition name="fade">
        <MobileOptions v-if="isMobile" />
        <DesktopOptions v-else />
      </Transition>

      <Transition name="slide-in">
        <UtilsNotifications class="notification-success flex lg:bottom-[10px]">
          <template #notification-title>Success</template>
          <template #notification-text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            voluptatum eos natus tempore laborum.
          </template>
        </UtilsNotifications>
      </Transition>

      <slot />

      <!-- Landing section -->
      <section
        class="flex grid h-[100vh] w-[100%] items-center md:grid-cols-[auto_1fr] lg:w-1/2"
        id="landing"
      >
        <Transition name="fade">
          <MobileAboutMe v-if="isMobile" />
          <DesktopAboutMe v-else />
        </Transition>

        <Transition name="fade">
          <!-- TODO Need to be reworked to allow both video and image -->
          <DesktopShowcase class="hidden lg:flex" />

          <!-- <DesktopShowcase v-else class="bg-[url('/img/nomansky.jpg')]" /> -->
        </Transition>
      </section>

      <!-- Wrapper section -->
      <Transition id="skill" name="fade">
        <MobileWrapper v-if="isMobile" />
        <DesktopWrapper class="flex self-center" v-else />
      </Transition>

      <!-- Skill section -->
      <section class="mb-[300px] flex h-max w-full flex-col gap-5">
        <div v-if="isMobile"></div>
        <DesktopCompetenceShowcase class="flex w-full justify-center" v-else />
      </section>

      <!-- Projects Section -->

      <section id="project" class="flex w-full flex-col items-center gap-[5em]">
        <h2 class="mx-20 flex border-b-2 py-3 text-3xl uppercase md:text-4xl">
          Mes projets
        </h2>

        <!-- TODO need to do the filter system -->
        <ClientFilter class="mx-auto" />

        <article v-if="isMobile">
          <article class="row-span-2 mx-auto flex flex-col gap-[2em]">
            <MobileCard v-for="card in cards" :key="card">
              <template #cardProject-img>
                <img src="/img/Frame-3.png" alt="" />
              </template>
              <template #cardProject-iconlink>
                <NuxtLink to="https://github.com/trending" target="_blank">
                  <Icon size="1.5em" name="mdi:github" />
                </NuxtLink>
                <NuxtLink to="https://github.com/trending" target="_blank">
                  <Icon size="1.5em" name="majesticons:external-link-line" />
                </NuxtLink>
              </template>
              <template #cardProject-dateStart> 2021 </template>
              <template #cardProject-dateEnd> 2022 </template>
              <template #cardProject-title> TitleMobile </template>
              <template #cardProject-desc>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
                tempora eaque dolorem magnam odio placeat officiis omnis officia
                voluptatum voluptates consequuntur ad consequatur itaque, quos
                et deleniti sed porro ducimus!
              </template>
              <template #fortag>
                <UtilsTagsTailwindcss />
                <UtilsTagsNuxt />
              </template>
            </MobileCard>
          </article>
        </article>

        <article v-else>
          <article class="flex w-full flex-wrap justify-center gap-[2em]">
            <DesktopCard
              class="hidden md:flex"
              v-for="card in cards"
              :key="card"
            >
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
                  class="brightness-[1] hover:scale-[1.05] group-hover:brightness-[0.5]"
                  src="/img/nomansky.jpg"
                />
              </template>

              <template #cardProject-title>TEST</template>
              <template #cardProject-dateStart>2019</template>
              <template #cardProject-dateEnd>2024</template>
              <template #cardProject-desc>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officia, quisquam reiciendis. Quis quo blanditiis possimus id
                adipisci a, asperiores eaque illum maxime, magnam perferendis
                consequuntur ex excepturi atque aut. Dicta.
              </template>
              <template #fortag>
                <UtilsTagsTailwindcss />
                <UtilsTagsPhp />
                <UtilsTagsNuxt />
                <UtilsTagsSymfony />
                <UtilsTagsReact />
                <UtilsTagsNext />
                <UtilsTagsBootstrap />
                <UtilsTagsProfessionnal />
              </template>
            </DesktopCard>
          </article>
        </article>
      </section>

      <section
        id="point-of-interest"
        class="my-20 flex hidden w-full gap-2 md:justify-center"
      >
        <ClientPointofInterest />
      </section>

      <Transition name="fade">
        <ClientOthers />
      </Transition>
    </section>
  </main>
</template>

<style scoped>
main {
  height: 100%;
  overflow-x: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
