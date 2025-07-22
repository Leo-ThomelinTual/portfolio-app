<script setup>
function expand() {
  const button1 = document.querySelector("#button1");
  const button2 = document.querySelector("#button2");
  const button3 = document.querySelector("#button3");

  button1.classList.toggle("left-[60px]");
  button1.classList.toggle("left-0");
  button1.classList.toggle("top-[-30px]");
  button1.classList.toggle("top-0");

  button2.classList.toggle("left-[60px]");
  button2.classList.toggle("left-0");
  button2.classList.toggle("top-[35px]");
  button2.classList.toggle("top-0");

  button3.classList.toggle("left-[5px]");
  button3.classList.toggle("left-0");
  button3.classList.toggle("top-[70px]");
  button3.classList.toggle("top-0");
}
</script>

<template>
  <section class="z-[1000]">
    <article class="absolute z-[1000]">
      <button
        @click="expand"
        class="rounded-full border-2 border-gray-500/50 bg-black p-3"
      >
        <Icon size="2em" name="material-symbols:menu-rounded" />
      </button>
    </article>

    <article class="absolute left-1 z-[0] flex flex-col gap-2">
      <button
        id="button1"
        class="absolute left-0 top-0 w-max rounded-full border-2 border-gray-500/50 bg-black p-3"
      >
        <Icon name="material-symbols:add-home" />
      </button>
      <button
        id="button2"
        class="absolute left-0 top-0 w-max rounded-full border-2 border-gray-500/50 bg-black p-3"
      >
        <Icon name="material-symbols:add-home" />
      </button>
      <button
        id="button3"
        class="absolute left-0 top-0 w-max rounded-full border-2 border-gray-500/50 bg-black p-3"
      >
        <Icon name="material-symbols:add-home" />
      </button>
    </article>
  </section>
</template>

<style scoped>
* {
  transition: all 0.5s ease;
}
</style>
