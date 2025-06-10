<script setup>
function toggleHomepageShowcase() {
  const showcase = document.querySelector("#showcase");
  const sections = document.querySelectorAll("section:not(#showcase)");
  if (showcase) {
    if (showcase.classList.contains("w-[95%]")) {
      showcase.classList.remove(
        "w-[95%]",
        "right-[50%]",
        "translate-x-[50%]",
        "z-[10000]"
      );
      showcase.classList.add("right-10", "w-[40%]");
      document.getElementById("text-box-expand").textContent =
        "Click to expand";
      sections.forEach((section) => {
        section.classList.remove("blur-md");
      });
    } else {
      showcase.classList.remove("w-[40%]", "right-10");
      showcase.classList.add(
        "w-[95%]",
        "right-[50%]",
        "translate-x-[50%]",
        "z-[10000]"
      );
      document.getElementById("text-box-expand").textContent =
        "Click to reduce";
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
    class="showcase group w-[40%] h-[95%] border border-gray-500 hover:border-x-white hover:border-t-white hidden md:flex bg-black rounded-md fixed top-2/4 right-10 transform -translate-y-1/2 bg-cover bg-center bg-no-repeat SlideInFrom_Right-Bounce"
  >
    <article
      class="flex items-center ml-auto gap-2 hover:gap-4 p-3 border-2 rounded-md bg-black w-max h-max m-3 opacity-50 group-hover:opacity-100"
    >
      <p id="text-box-expand">Click to expand</p>
      <Icon size="1.5rem" name="mdi:mouse-right-click" />
    </article>
  </section>
</template>

<style scoped>
.showcase {
  transition: border-color 5s ease width 1s ease;
}
</style>
