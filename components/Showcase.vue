<script setup>
function toggleHomepageShowcase() {
  const showcase = document.querySelector("#showcase");
  const sections = document.querySelectorAll("section:not(#showcase)");
  if (showcase) {
    if (showcase.classList.contains("w-[95%]")) {
      showcase.classList.remove("w-[95%]", "right-[50%]", "translate-x-[50%]");
      showcase.classList.add("right-10", "w-[40%]");
      sections.forEach((section) => {
        section.classList.remove("blur-md");
      });
    } else {
      showcase.classList.remove("w-[40%]", "right-10");
      showcase.classList.add("w-[95%]", "right-[50%]", "translate-x-[50%]");
      sections.forEach((section) => {
        section.classList.add("blur-md");
      });
    }
  }
}
</script>

<template>
  <section
    @click="toggleHomepageShowcase"
    id="showcase"
    class="group w-[40%] h-[85%] border border-gray-500 hover:border-x-white hover:border-t-white hidden md:flex bg-black z-[100] rounded-md fixed top-2/4 right-10 transform -translate-y-1/2 bg-[url('~/public/img/projet-webcv.gif')] bg-cover bg-center bg-no-repeat transition-all duration-1000 SlideInFrom_Right-Bounce"
  >
    <h3
      class="absolute -bottom-12 w-full text-center py-1 mt-3 rounded-md border border-gray-500 bg-gray-500 bg-opacity-25 uppercase font-bold group-hover:-bottom-11 group-hover:border-x-white group-hover:border-b-white transition-all duration-500"
    >
      Vidéo de Presentation
    </h3>
  </section>
</template>
