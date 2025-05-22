<script setup>
function toggleLanguageModal() {
  const modal = document.querySelector("#language-modal");
  const layer1 = document.querySelector("#homepageLayer1");
  if (modal) {
    if (modal.classList.contains("flex")) {
      modal.classList.remove("flex");
      modal.classList.add("hidden");
    } else {
      modal.classList.add("hidden");
    }
  }
}
</script>
<template>
  <section
    id="language-modal"
    class="flex flex-col fixed w-2/3 h-2/3 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] p-5 backdrop-blur-[10px] border-2 border-gray-500 rounded-xl bg-gray-500 bg-opacity-25 z-50"
  >
    <article class="flex flex-col gap-3">
      <h2>🇫🇷 | Choisissez une langue :</h2>
      <h2>🇬🇧 | Choice a language :</h2>
    </article>
    <section
      class="flex flex-row items-center justify-between h-[75%] mx-[30%]"
    >
      <article
        @click="toggleLanguageModal"
        class="group flex flex-col text-center"
      >
        <Icon
          class="w-[200px] h-[200px] hover:scale-110 transition-all ease-in-out"
          size="3rem"
          name="twemoji:flag-france"
        />
        <p
          class="flex items-center justify-center h-[40px] bg-gray-500 bg-opacity-25 rounded-md"
        >
          Français
        </p>
      </article>
      <article
        @click="toggleLanguageModal"
        class="flex flex-col text-center group"
      >
        <Icon
          class="w-[200px] h-[200px] hover:scale-110 transition-all ease-in-out"
          size="3rem"
          name="twemoji:flag-for-flag-united-kingdom"
        />
        <p
          class="flex items-center justify-center h-[40px] bg-gray-500 bg-opacity-25 rounded-md"
        >
          English
        </p>
      </article>
    </section>
    <article class="mx-auto text-center w-2/3">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        molestiae, voluptatem, voluptas, voluptatibus doloremque voluptatum
        voluptate voluptates laboriosam quibusdam repellendus dolorum.
      </p>
    </article>
  </section>
</template>
<style scoped></style>
