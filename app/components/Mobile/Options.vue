<script setup>
function toggleMobileOptions() {
  const options = document.querySelector("#mobileOptions");
  const close = document.querySelector("#mobileClose");
  const open = document.querySelector("#mobileOpen");
  const button = document.querySelector("#button");
  if (options) {
    options.classList.toggle("right-[0]");
    options.classList.toggle("right-[-90px]");
    button.classList.toggle("rounded-y-md", "rounded-l-md");
    button.classList.toggle("rounded-md");
    button.classList.toggle("border-y-2", "border-l-2");
    button.classList.toggle("border-2");

    close.classList.toggle("hidden");
    close.classList.toggle("flex");

    open.classList.toggle("flex");
    open.classList.toggle("hidden");
  }
}
</script>
<template>
  <section
    id="mobileOptions"
    class="fixed bottom-[10px] right-[-90px] z-[1000] flex w-max flex-row items-center gap-1 rounded-md"
  >
    <button
      id="button"
      class="rounded-y-md group h-max rounded-l-md border-y-2 border-l-2 border-gray-500 bg-[#121212] px-2 py-2 font-bold"
      @click="toggleMobileOptions"
    >
      <Icon
        class="hidden text-red-500 group-hover:rotate-90"
        id="mobileClose"
        name="material-symbols:close"
        size="1.3em"
      />
      <Icon
        class="flex group-hover:rotate-90"
        id="mobileOpen"
        name="material-symbols:settings"
        size="1.3em"
      />
    </button>
    <section
      class="rounded-y-md flex w-max flex-row items-center gap-[1em] rounded-l-md border-y-2 border-l-2 border-gray-500 bg-black px-2 py-1"
    >
      <article class="group flex flex-row gap-1 text-center">
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
      </article>
    </section>
  </section>
</template>

<style scoped>
* {
  transition: all 0.4s ease;
}
</style>
