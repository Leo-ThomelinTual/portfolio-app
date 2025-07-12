<script setup>
const { locales, setLocale } = useI18n();

function toggleDesktopOptions() {
  const options = document.querySelector("#desktopOptions");
  const close = document.querySelector("#desktopClose");
  const open = document.querySelector("#desktopOpen");
  if (options) {
    options.classList.toggle("-bottom-3");
    options.classList.toggle("-bottom-[100px]");

    close.classList.toggle("hidden");
    close.classList.toggle("flex");

    open.classList.toggle("flex");
    open.classList.toggle("hidden");
  }
}
</script>
<template>
  <section
    id="desktopOptions"
    class="fixed -bottom-[100px] left-[30px] z-[1000] m-2 flex w-max flex-col rounded-md bg-opacity-50 p-3"
  >
    <article class="mb-1 flex flex-row gap-1">
      <p class="w-max rounded-md bg-black px-5 py-2 font-bold">Options</p>
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
      class="rounded-bl-0 flex w-max items-center gap-[1em] rounded-t-md rounded-br-md bg-black px-2 py-1"
    >
      <p>Light/Night :</p>
      <article class="group flex flex-col text-center">
        <Icon
          class="transition-all ease-in-out hover:scale-105"
          size="2rem"
          name="material-symbols:lightbulb-2-rounded"
        />
      </article>
      <article class="group flex flex-col text-center">
        <Icon
          class="transition-all ease-in-out hover:scale-105"
          size="2rem"
          name="material-symbols:lightbulb-2-outline-sharp"
        />
      </article>
    </section>
    <section
      class="rounded-t-0 flex w-max items-center gap-[1em] rounded-b-md bg-black px-2 py-1"
    >
      <p>Langue :</p>
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
  </section>
</template>
<style scoped></style>
