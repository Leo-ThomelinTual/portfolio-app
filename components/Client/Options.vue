<script setup>
function toggleOptions() {
  const options = document.querySelector("#options");
  const close = document.querySelector("#close");
  const open = document.querySelector("#open");
  if (options) {
    options.classList.toggle("-bottom-3");
    options.classList.toggle("-bottom-[100px]");

    close.style.display = close.style.display === "flex" ? "none" : "flex";
    open.style.display = open.style.display === "none" ? "flex" : "none";
  }
}
</script>
<template>
  <section
    id="options"
    class="fixed -bottom-[100px] left-[30px] z-[1000] m-2 flex w-max flex-col rounded-md bg-opacity-50 p-3"
  >
    <article class="mb-1 flex flex-row gap-1">
      <p class="w-max rounded-md bg-black px-5 py-2 font-bold">Options</p>
      <button
        class="w-max rounded-md bg-black px-2 py-2 font-bold"
        @click="toggleOptions"
      >
        <Icon
          id="close"
          name="material-symbols:close"
          size="1.5em"
          style="display: none; color: red"
        />
        <Icon
          id="open"
          name="material-symbols:bottom-panel-open-rounded"
          size="1.5em"
          style="display: flex"
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
          name="twemoji:flag-france"
        />
      </article>
      <article class="group flex flex-col text-center">
        <Icon
          class="transition-all ease-in-out hover:scale-105"
          size="2rem"
          name="twemoji:flag-for-flag-united-kingdom"
        />
      </article>
    </section>
    <section
      class="rounded-t-0 flex w-max items-center gap-[1em] rounded-b-md bg-black px-2 py-1"
    >
      <p>Langue :</p>
      <article class="group flex flex-col text-center">
        <Icon
          class="transition-all ease-in-out hover:scale-105"
          size="2rem"
          name="twemoji:flag-france"
        />
      </article>
      <article class="group flex flex-col text-center">
        <Icon
          class="transition-all ease-in-out hover:scale-105"
          size="2rem"
          name="twemoji:flag-for-flag-united-kingdom"
        />
      </article>
    </section>
  </section>
</template>
<style scoped></style>
