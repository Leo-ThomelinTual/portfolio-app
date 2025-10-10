<script setup>
function toggleDesktopOptions() {
  const options = document.querySelector("#desktopOptions");
  const close = document.querySelector("#desktopClose");
  const open = document.querySelector("#desktopOpen");
  if (options) {
    options.classList.toggle("-bottom-3");
    options.classList.toggle("-bottom-[60px]");

    close.classList.toggle("hidden");
    close.classList.toggle("flex");

    open.classList.toggle("flex");
    open.classList.toggle("hidden");
  }
}

function toggleTheme(theme) {
  const neon = document.querySelector("#themeNeon");
  const halloween = document.querySelector("#themeHalloween");
  const noel = document.querySelector("#noel");
  const body = document.body;

  if (theme === neon) {
    body.classList.remove("dark");
    body.classList.add("light");

    night.classList.add("hidden");
    night.classList.remove("flex");

    light.classList.remove("hidden");
    light.classList.add("flex");
  } else if (theme === halloween) {
    body.classList.remove("light");
    body.classList.add("dark");

    light.classList.add("hidden");
    light.classList.remove("flex");

    night.classList.remove("hidden");
    night.classList.add("flex");
  } else if (theme === noel) {
  }
}
</script>
<template>
  <section
    id="desktopOptions"
    class="fixed -bottom-[60px] left-[30px] z-[1000] m-2 flex w-max flex-col rounded-md bg-opacity-50 p-3"
  >
    <article class="mb-1 flex flex-row gap-1">
      <p class="rounded-md bg-black px-5 py-2 font-bold">
        {{ $t("Options.Title") }}
      </p>
      <button
        class="group w-max rounded-md bg-black px-2 py-2 font-bold"
        @click="toggleDesktopOptions"
      >
        <Icon
          class="hidden text-red-500 group-hover:rotate-90"
          id="desktopClose"
          name="material-symbols:close"
          size="1.3em"
        />
        <Icon
          class="flex group-hover:rotate-90"
          id="desktopOpen"
          name="material-symbols:settings"
          size="1.3em"
        />
      </button>
    </article>

    <section
      class="flex w-max items-center gap-[1em] rounded-t-md rounded-br-md bg-black px-2 py-1"
    >

      <NuxtLink to="/" class="group flex flex-col text-center">
        <Icon
          class="transition-all ease-in-out hover:scale-105"
          size="2rem"
          name="twemoji:flag-france"
        />
      </NuxtLink>

      <NuxtLink
        to="/en"
        @click="setLocale(locale.code)"
        class="group flex flex-col text-center"
      >
        <Icon
          class="transition-all ease-in-out hover:scale-105"
          size="2rem"
          name="twemoji:flag-for-flag-united-kingdom"
        />
      </NuxtLink>
    </section>

    <section
      class="rounded-t-0 flex hidden w-max items-center gap-[1em] rounded-b-md bg-black px-2 py-1"
    >
      <!-- TODO Make theme WORK -->

      <p>Theme :</p>
      <article class="group flex flex-row text-center">
        <Icon
          @click="toggleTheme(neon)"
          id="neon"
          size="2rem"
          class="flex transition-all ease-in hover:scale-105"
          name="basil:lightning-solid"
        />
        <Icon
          @click="toggleTheme(halloween)"
          id="halloween"
          size="2rem"
          class="flex text-orange-500 transition-all ease-in hover:scale-105"
          name="tabler:pumpkin-scary"
        />
        <Icon
          @click="toggleTheme(noel)"
          id="noel"
          size="2rem"
          class="flex text-green-500 transition-all ease-in hover:scale-105"
          name="tabler:christmas-tree"
        />
      </article>
    </section>
  </section>
</template>

<style scoped>
* {
  transition: all 0.4s ease;
}
</style>
